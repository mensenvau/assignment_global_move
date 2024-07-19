const prompts = require("prompts");

let generateSwissTournamentPairs = (players) => {
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

    let potentialOpponents = players.filter((player) => !paired.has(player.player_id) && !player.player_with.includes(player1.player_id) && player.player_id !== player1.player_id);

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

let printPlayer = (players) => {
  players.sort((a, b) => b.current_score - a.current_score || b.score - a.score);
  for (let i = 0; i < players.length; i++) {
    let { player_id, score, current_score, player_with, skip } = players[i];
    console.log(player_id, " => ", score, current_score, player_with, skip);
  }
};

let matchPlay = async (players, matches) => {
  for (let i = 0; i < matches.length; i++) {
    if (matches[i][1] == -1) {
      console.log(`Next step passed: (player: ${matches[i][0]})`);
      players = players.map((item) => {
        if (item.player_id == matches[i][0]) return { ...item, current_score: item.current_score + 1, skip: true };
        return item;
      });
      continue;
    }

    const response = await prompts({
      type: "number",
      name: "answer",
      message: `Enter the number who wins, if it's a tie just put -1:  (player: ${matches[i][0]}) - (player: ${matches[i][1]})`,
    });

    players = players.map((item) => {
      if (item.player_id == matches[i][0]) return { ...item, player_with: [...item.player_with, matches[i][1]] };
      if (item.player_id == matches[i][1]) return { ...item, player_with: [...item.player_with, matches[i][0]] };
      return item;
    });

    if (response.answer != -1) {
      players = players.map((item) => {
        if (item.player_id == response.answer) return { ...item, current_score: item.current_score + 1 };
        return item;
      });
    } else {
      players = players.map((item) => {
        if (item.player_id == matches1[i][0]) return { ...item, current_score: item.current_score + 0.5 };
        if (item.player_id == matches1[i][1]) return { ...item, current_score: item.current_score + 0.5 };
        return item;
      });
    }
  }

  return players;
};

(async () => {
  let players = [
    { player_id: 1, score: 20, current_score: 0, player_with: [], skip: false },
    { player_id: 2, score: 0, current_score: 0, player_with: [], skip: false },
    { player_id: 3, score: 2, current_score: 0, player_with: [], skip: false },
    { player_id: 4, score: 40, current_score: 0, player_with: [], skip: false },
    { player_id: 5, score: 30, current_score: 0, player_with: [], skip: false },
    { player_id: 6, score: 30, current_score: 0, player_with: [], skip: false },
    { player_id: 7, score: 30, current_score: 0, player_with: [], skip: false },
    { player_id: 8, score: 30, current_score: 0, player_with: [], skip: false },
    { player_id: 9, score: 30, current_score: 0, player_with: [], skip: false },
    { player_id: 10, score: 30, current_score: 0, player_with: [], skip: false },
    { player_id: 11, score: 20, current_score: 0, player_with: [], skip: false },
  ];

  console.log(`All round: ${Math.ceil(Math.log2(players.length))}`)
  for (let i = 0; i < Math.ceil(Math.log2(players.length)); i++) {
    printPlayer(players);
    let matches = generateSwissTournamentPairs(players);
    console.log(matches);
    players = await matchPlay(players, matches);
  }

  printPlayer(players);
})();
