function convertMysqlResultToType(results) {
  return results.map((result) => ({
    tournament_id: result.tournament_id,
    player_id: result.player_id, 
    score: result.score,
    current_score: parseFloat(result.current_score),
    skip: result.skip,
    player_rival: JSON.parse(result.player_rival),
  }));
}

let generateSwissTournamentPairs = (players) => {
  players = convertMysqlResultToType(players); 

  // Sort players by current_score and then by total score
  players.sort((a, b) => b.current_score - a.current_score || b.score - a.score);

  let paired = new Set();
  let matches = [];
  let matchResults = [];

  // Handle odd number of players by giving one player a bye
  if (players.length % 2 === 1) {
    let playerToSkip = [...players].reverse().find((player) => !player.skip);
    paired.add(playerToSkip.player_id);
    matches.push([playerToSkip.player_id, -1]); // -1 indicates a bye
  }

  // Recursive function to find valid match pairs
  let findPairs = (players, paired, matches) => {
    if (matchResults.length === Math.ceil(players.length / 2)) return;
    if (matches.length === Math.ceil(players.length / 2)) {
      matchResults = [...matches];
    }

    let player1 = players.find((player) => !paired.has(player.player_id));

    if (!player1) return;
    paired.add(player1.player_id);

    let potentialOpponents = players.filter((player) => !paired.has(player.player_id) && !player.player_rival.includes(player1.player_id) && player.player_id !== player1.player_id);

    for (let i = 0; i < potentialOpponents.length; i++) {
      paired.add(potentialOpponents[i].player_id);
      matches.push([player1.player_id, potentialOpponents[i].player_id]);

      // Recursively find the next pair
      findPairs(players, paired, matches);

      paired.delete(potentialOpponents[i].player_id);
      matches.pop();
    }
  };

  findPairs(players, paired, matches);
  return matchResults;
};

module.exports = {
  generateSwissTournamentPairs,
};
