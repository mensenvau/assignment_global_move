const { execute } = require("uzdev/mysql");

exports.getMe = async (req, res, next) => {
  try {
    let [user, player] = await Promise.all([
      execute("select * from users where user_id = ?", [req.user_id], 1),
      execute("select * from players where user_id = ?", [req.user_id], 1)
    ]);
    
    if (!user) throw new Error("This user does not exist!");
    return res.json({ user, player });
  } catch (err) {
    return next(new Error(JSON.stringify({ message: err.message, code: "router" })));
  }
};
