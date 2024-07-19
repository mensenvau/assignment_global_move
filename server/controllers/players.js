const { execute } = require("uzdev/mysql");

exports.getUsersByName = async (req, res, next) => {
  try {
    let users = await execute("select user_id, full_name, username from users where full_name like ? order by full_name desc", [`%${req.query.name || ""}%`]);
    if (!users) throw new Error("This users does not exist");
    return res.json({ users });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};

exports.getPlayersByName = async (req, res, next) => {
  try {
    let players = await execute("select player_id, full_name, age from players where full_name like ? order by full_name desc", [`%${req.query.name || ""}%`]);
    if (!players) throw new Error("This players does not exist");
    return res.json({ players });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};

exports.getPlayers = async (req, res, next) => {
  try {
    /*  pagination options */
    let size = parseInt(req.query?.size) || 10;
    let page = parseInt(req.query?.page) || 0;

    let [cnt, players] = await Promise.all([execute("select * from players order by player_id desc", []), execute("select * from players order by player_id desc limit ?, ?", [size * page, size])]);
    if (!players) throw new Error("This players does not exist");

    let count = Math.ceil(cnt.count / Math.min(size, 1)) || 0;
    return res.json({ players, count, page, size });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};

exports.addPlayer = async (req, res, next) => {
  try {
    let { user_id, full_name, age, rating, country_id } = req.body;

    let check = await execute("select * from players where user_id = ?", [user_id], 1);
    if (check) throw new Error("A player account is already attached to this user");

    await execute("insert into players (user_id, full_name, age, rating, country_id) values (?, ?, ?, ?, ?)", [user_id, full_name, age, rating, country_id]);
    return res.json({ message: "Player created." });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};

exports.putPlayer = async (req, res, next) => {
  try {
    let { user_id, full_name, age, rating, country_id, player_id } = req.body;
    let upd = await execute("update players set user_id = ?, full_name = ?, age = ?, rating = ?, country_id = ?, updated_dt = now() where player_id = ?", [user_id, full_name, age, rating, country_id, player_id]);
    if (upd?.changedRows == 0) throw new Error("There is no such player");
    return res.json({
      message: "Player updated.",
      player: { player_id, user_id, full_name, age, rating, country_id },
    });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};

exports.delPlayer = async (req, res, next) => {
  try {
    let { player_id } = req.body;
    let del = await execute("delete from players where player_id = ?", [player_id]);
    if (del?.affectedRows == 0) throw new Error("There is no such player");
    return res.json({ message: "Player deleted." });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};

exports.getCountries = async (req, res, next) => {
  try {
    let countries = await execute("select * from countries order by 1", []);
    if (!countries) throw new Error("There is a system error");
    return res.json({ countries });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};
