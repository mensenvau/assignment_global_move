const { execute } = require("uzdev/mysql");
const { generateSwissTournamentPairs } = require("../function/generate-matches");

exports.getMatches = async (req, res, next) => {
  try {
    let { tournament_id } = req.query;
    let matches = await execute("select * from matches where tournament_id = ? order by round asc", [tournament_id]);
    if (!matches) throw new Error("This matches does not exist");
    return res.json({ matches });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};

exports.buildMatches = async (req, res, next) => {
  try {
    let { tournament_id } = req.query;
    let [leaderboard, is_over, counts] = await Promise.all([
      execute("select * from vw_leaderboard where tournament_id = ?", [tournament_id]),
      execute("select * from matches where tournament_id = ? and result is null", [tournament_id], 1),
      execute("select (select count(distinct round) from matches where tournament_id = ?) as rounds, (select count(distinct player_id) from tournament_participants where tournament_id = ?) as players", [tournament_id, tournament_id], 1),
    ]);

    if (is_over) throw new Error("The current round is not over");
    if (counts.rounds == Math.ceil(Math.log2(counts.players))) throw new Error("The current round cannot be made more than the last round.");

    let matches = generateSwissTournamentPairs(leaderboard);

    await Promise.all(
      matches.map((item) => {
        if (item[1] != -1) {
          execute("insert into matches (tournament_id, round, player1_id, player2_id) values(?, ?, ?, ?)", [tournament_id, 0, item[0], item[1]]);
        } else {
          execute("insert into matches (tournament_id, round, player1_id, player2_id, result, skip) values(?, ?, ?, ?, ?, ?)", [tournament_id, 0, item[0], item[1], "player1", true]);
        }
      })
    );

    res.json({ matches, leaderboard });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};

exports.setResultMatches = async (req, res, next) => {
  try {
    let { match_id, result } = req.body;
    let upd = await execute("update matches set result = ? where match_id = ? and result is null", [result, match_id]);
    if (upd?.changedRows == 0) throw new Error("There is no such match");
    return res.json({ message: "Match result set." });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};

exports.getLeaderboard = async (req, res, next) => {
  try {
    let { tournament_id } = req.query; 
    let leaderboard = await execute("select * from vw_leaderboard where tournament_id = ?", [tournament_id]);
    return res.json({ leaderboard });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};
