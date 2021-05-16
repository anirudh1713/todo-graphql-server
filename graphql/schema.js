const { gql } = require('apollo-server');

module.exports = gql`
  type Todo {
    id: Int!
    title: String!
  }

  type Query {
    todos: [Todo!]!
  }

  type Mutation {
    createTodo(title: String!): Todo!
  }
`;
