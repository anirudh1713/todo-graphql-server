const { gql } = require('apollo-server');

module.exports = gql`
  type Todo {
    id: Int!
    title: String!
  }

  type Query {
    todos: [Todo!]!
    todo(id: Int!): Todo!
  }

  type Mutation {
    createTodo(title: String!): Todo!
    editTodo(id: Int!, title: String!): Todo!
    deleteTodo(id: Int!): Todo!
  }

  type Subscription {
    todo: Todo! 
  }
`;
