const todoResolvers = require('./Todos/todos.resolvers');

const rootResolver = {
  Query: {
    ...todoResolvers.Query,
  },
  Mutation: {
    ...todoResolvers.Mutation,
  },
  Subscription: {
    ...todoResolvers.Subscription,
  },
};

module.exports = rootResolver;
