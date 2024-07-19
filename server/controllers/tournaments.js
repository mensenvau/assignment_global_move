const { execute } = require("uzdev/mysql");

exports.getTournamentById = async (req, res, next) => {
  try {
    let [tournament, participants] = await Promise.all([execute("select * from tournaments order by tournament_id desc", [req.query.id], 1), execute("select * from tournament_participants order by tournament_id desc", [req.query.id], 1)]);
    if (!tournament) throw new Error("This tournaments does not exist");
    return res.json({ tournament, participants });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};

exports.getTournaments = async (req, res, next) => {
  try {
    /*  pagination options */
    let size = parseInt(req.query?.size) || 10;
    let page = parseInt(req.query?.page) || 0;

    let [cnt, tournaments] = await Promise.all([execute("select * from tournaments order by tournament_id desc", []), execute("select * from tournaments order by tournament_id desc limit ?, ?", [size * page, size])]);
    if (!tournaments) throw new Error("This tournaments does not exist");

    let count = Math.ceil(cnt.count / Math.min(size, 1)) || 0;
    return res.json({ tournaments, count, page, size });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};

exports.addTournament = async (req, res, next) => {
  try {
    let { name, start_date, end_date } = req.body;
    await execute("insert into tournaments (name, start_date, end_date) values (?, ?, ?)", [name, start_date, end_date]);
    return res.json({ message: "Tournaments created." });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};

exports.putTournament = async (req, res, next) => {
  try {
    let { name, start_date, end_date, tournament_id } = req.body;
    let upd = await execute("update tournaments set name = ?, start_date=?, end_date=?, updated_dt = now() where tournament_id = ?", [name, start_date, end_date, tournament_id]);
    if (upd?.changedRows == 0) throw new Error("There is no such tournament");
    return res.json({
      message: "Tournaments updated.",
      player: { tournament_id, name, start_date, end_date },
    });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};

exports.delTournament = async (req, res, next) => {
  try {
    let { tournament_id } = req.body;
    let del = await execute("delete from tournaments where tournament_id = ?", [tournament_id]);
    if (del?.affectedRows == 0) throw new Error("There is no such tournament");
    return res.json({ message: "Tournaments deleted." });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};

exports.addParticipant = async (req, res, next) => {
  try {
    let { tournament_id, player_id } = req.body;
    await execute("insert into tournament_participants (tournament_id, player_id) values (?, ?)", [tournament_id, player_id]);
    return res.json({ message: "Participant added." });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};

exports.delParticipant = async (req, res, next) => {
  try {
    let { uid } = req.body;
    let del = await execute("delete from tournament_participants where uid = ?", [uid]);
    if (del?.affectedRows == 0) throw new Error("There is no such Participant");
    return res.json({ message: "Participant deleted." });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};
