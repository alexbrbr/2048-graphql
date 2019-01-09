const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    scores: [Score]
    score(userName: ID!): Score
  }
  type Score {
    userName: ID!
    score: Int
  }
  type Mutation {
    # if false, booking trips failed -- check errors
    updateScore(userName: ID!, newScore: Int): Score
    addScore(userName: ID!, score: Int): [Score]
  }
`;

module.exports = typeDefs;
