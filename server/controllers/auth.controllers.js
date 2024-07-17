const { execute } = require("uzdev/mysql")
const { smsSender } = require("uzdev/sender")
const { randomCode, enCode, deCode } = require("uzdev/function")

exports.authPhone = async (req, res, next) => {
    try {
        let phone = req.body?.phone;
        let code = randomCode(5);

        let data = await execute("select * from tmp_sms_codes where phone = ? and TIMESTAMPDIFF(minute, savetime, NOW()) < 31", [phone], 1);
        if (data) {
            throw new Error("Sizga SMS yuborilgan, 30 daqiqa kuting va qayta urinib ko‘ring.");
        }

        let ins = await execute("insert into tmp_sms_codes (phone, code) values (?, ?)", [phone, code]);
        smsSender(phone, `Webdoc tizimidan ro'yxatdan o'tish uchun kod: ${code}`, async (phone, status, message) => {
            await execute("update tmp_sms_codes set is_sent = ? where sms_id = ?", [status, ins.insertId]);
        });

        return res.json({ sms_token: enCode({ sms_id: ins.insertId, type: "sms_token" }), message: "Sizga autentifikatsiya kodi yuborildi!" });
    } catch (err) {
        return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
    }
};

exports.authCode = async (req, res, next) => {
    try {
        let { sms_token, code } = req.body;
        let { sms_id, type } = deCode(sms_token);

        let data = await execute("select * from tmp_sms_codes where sms_id = ? and is_active = 1", [sms_id], 1);

        if (!data || type !== "sms_token") {
            throw new Error("Token muddati tugagan.");
        }

        if (data.attempt_count > 5) {
            throw new Error("Urinishlar soni 5 tadan oshdi.");
        }

        if (data.code !== code) {
            await execute("update tmp_sms_codes set attempt_count = attempt_count + 1 where sms_id = ?", [sms_id]);
            throw new Error("Kod noto'g'ri.");
        }

        let [usr, pass] = await Promise.all([
            await execute("call create_user(?);", [data.phone], 1),
            await execute("update tmp_sms_codes set is_active = 0 where sms_id = ?", [sms_id])
        ])

        res.json({ user_token: enCode({ user_id: usr[0].user_id, company_id: usr[0].company_id, type: "user_token" }), message: "Tizimga xush kelibsiz!" });
    } catch (err) {
        return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
    }
};

exports.authCheck = (req, res, next) => {
    try {
        let header = req.headers["authorization"];
        if (header && header.startsWith("Bearer ")) {
            let token = header.slice(7);
            req.user = deCode(token);
            req.user_id = req.user?.user_id
            req.company_id = req.user?.company_id
        }
    } catch (err) {
        console.log(`Message: ${err.message}, Code: authCheck`);
    }
    next();
};

exports.authStop = (req, res, next) => {
    try {
        let { type, user_id } = req?.user || {};
        if (!req.user || type !== "user_token" || !user_id) {
            return res.status(500).json({ message: "Davom etish uchun ruxsatingiz yo‘q!" })
        }
        next();
    } catch (err) {
        next(new Error(JSON.stringify({ message: err.message, code: "router" })));
    }
};
