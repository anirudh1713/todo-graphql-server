const { getTodos, createTodo } = require('./todos.controller');

const todoResolvers = {
  Query: {
    todos: getTodos,
  },
  Mutation: {
    createTodo: createTodo,
  },
};

module.exports = todoResolvers;
