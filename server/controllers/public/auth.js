const { enCode, deCode } = require("uzdev/function");
const { execute } = require("uzdev/mysql");

exports.authLogin = async (req, res, next) => {
  try {
    let { username, password } = req.body;
    let user = await execute("select * from users where username = ? and password = md5(?)", [username, `${password}:${process.env.PASSWORD_SOLD_KEY}`], 1);
    if (!user) throw new Error("Login or password error, such user does not exist");

    return res.json({ user: user, token: enCode({ user_id: user.user_id, role_code: user.role_code }) });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};

exports.authRegistration = async (req, res, next) => {
  try {
    let { full_name, email, username, password } = req.body;
    let user = await execute("select * from users where username = ? or email = ?", [username, email], 1);
    if (user) throw new Error("This username or email already exists");

    await execute("insert into users (full_name, email, username, password) values (?, ?, ?, md5(?))", [full_name, email, username, `${password}:${process.env.PASSWORD_SOLD_KEY}`]);
    // here you need to send an email for confirmation.

    res.json({ message: "You have successfully registered", redirect: "/login" });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};

exports.checkUsername = async (req, res, next) => {
  try {
    let { username } = req.query;
    let user = await execute("select * from users where username = ?", [username], 1);
    res.json({ is_exist: Boolean(user) });
  } catch (err) {
    next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};

exports.checkAuth = (req, res, next) => {
  try {
    let header = req.headers["authorization"];
    if (header && header.startsWith("Bearer ")) {
      let token = header.slice(7);
      req.user = deCode(token);
      req.user_id = req.user?.user_id;
      req.role_code = req.user?.role_code;

      if (!req.user || !req.user_id) throw new Error("Invalid token");
    }
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
  next();
};

exports.checkAdmin = (req, res, next) => {
  try {
    if (req.role_code != "admin") throw new Error("You do not have permission");
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
  next();
};
