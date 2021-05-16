const todoResolvers = require('./Todos/todos.resolvers');

const rootResolver = {
  Query: {
    ...todoResolvers.Query,
  },
  Mutation: {
    ...todoResolvers.Mutation,
  }
};

module.exports = rootResolver;
