const fs = require("fs");

const filePath = "scores.json";
module.exports = {
  Query: {
    scores: async (_, __, { dataSources }) => {
      return JSON.parse(fs.readFileSync(filePath, "utf8"));
    },
    score: (_, { userName }, { dataSources }) => {
      return JSON.parse(fs.readFileSync(filePath, "utf8")).find(
        launch => launch.userName === userName
      );
    }
  },
  Mutation: {
    updateScore: (_, { userName, newScore }, { dataSources }) => {
      const scores = JSON.parse(fs.readFileSync(filePath, "utf8")).map(
        score => {
          if (score.userName === userName) {
            score.score = newScore;
          }
          return score;
        }
      );
      fs.writeFileSync(filePath, JSON.stringify(scores));
      return scores.find(score => score.userName === userName);
    },
    addScore: (_, { userName, score }, { dataSources }) => {
      const scores = JSON.parse(fs.readFileSync(filePath, "utf8"));
      if (!scores.some(score => score.userName === userName)) {
        scores.push({
          userName,
          score
        });
      }

      fs.writeFileSync(filePath, JSON.stringify(scores));
      return scores;
    }
  }
};
