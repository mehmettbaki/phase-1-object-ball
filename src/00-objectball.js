function gameObject() {
    let obj = {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 7,
            slamDunks: 12,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
    return obj;
  }
  function numPointsScore(player) {
    let obj = gameObject();
    for (let gameKey in obj) {
      let teamObj = obj[gameKey]; 
      let data = teamObj.players;
      for (let key in data) {
        if (key === player) {
          return data[key].points;
        }
      }
    }
  }
  function shoeSize(playerName) {
    let obj = gameObject();
    for (let gameKey in obj) {
      let teamObj = obj[gameKey]; 
      let data = teamObj.players;
      for (let key in data) {
        if (key === playerName) {
          return data[key].shoe;
        }
      }
    }
  }
  function teamColors(teamName) {
    let obj = gameObject();
    for (let gameKey in obj) {
      let teamObj = obj[gameKey]; 
      if (teamObj.teamName === teamName) {
        return teamObj.colors;
      }
    }
  }
  function teamNames() {
    let obj = gameObject();
    let arr = [];
    for (let gameKey in obj) {
      arr.push(obj[gameKey].teamName);
    }
    return arr;
  }
  function playerNumbers(TeamName) {
    let res = [];
    let obj = gameObject();
    for (let gameKey in obj) {
      if (obj[gameKey].teamName === TeamName) {
        for (let player in obj[gameKey].players) {
          res.push(obj[gameKey].players[player].number);
        }
      }
    }
  
    return res;
  }
  function playerStats(playerName) {
    let obj = gameObject();
    for (let gameKey in obj) {
      let players = obj[gameKey].players;
      for (let player in players) {
        if (player === playerName) {
          return players[player];
        }
      }
    }
  }
  function bigShoeRebounds() {
    let obj = gameObject();
    let maxShoe = 0;
    let rebound = 0;
    for (let gameKey in obj) {
      for (let player in obj[gameKey]["players"]) {
        
        if (obj[gameKey]["players"][player]["shoe"] > maxShoe) {
          maxShoe = obj[gameKey]["players"][player]["shoe"];
          rebound = obj[gameKey]["players"][player]["rebounds"];
        }
      }
    }
    return rebound;
  }
  function mostPointsScored() {
    let obj = gameObject();
    let maxPoints = 0;
    let playerName = "";
    for (let gameKey in obj) {
      for (let player in obj[gameKey]["players"]) {
        if (obj[gameKey]["players"][player]["points"] > maxPoints) {
          maxPoints = obj[gameKey]["players"][player]["points"];
          playerName = obj[gameKey]["players"][player]["name"];
        }
      }
    }
    return maxPoints;
  }
  
  
  function winningTeam() {
    let obj = gameObject();
    let point = 0;
    let teamName = "";
    for (let gameKey in obj) {
      let totalPoints = 0;
      for (let player in obj[gameKey]["players"]) {
        totalPoints += obj[gameKey]["players"][player]["points"];
      }
      if (totalPoints > point) {
        point = totalPoints;
        teamName = obj[gameKey]["teamName"];
      }
    }
    return teamName;
  }
  
  function playerWithLongestName() {
    let obj = gameObject();
    let maxLength = 0;
    let playerName = "";
    for (let gameKey in obj) {
      for (let player in obj[gameKey]["players"]) {
        if (player.length > maxLength) {
          maxLength = player.length;
          playerName = player;
        }
      }
    }
    return playerName;
  }
  function doesLongNameStealATon() {
    let obj = gameObject();
    let maxSteal = 0;
    let playerName = "";
    for (let gameKey in obj) {
      for (let player in obj[gameKey]["players"]) {
        if (obj[gameKey]["players"][player]["steals"] > maxSteal) {
          maxSteal = obj[gameKey]["players"][player]["steals"];
          playerName = player;
        }
      }
    }
    return playerName === playerWithLongestName();
  }
