const { 
  getTodos,
  createTodo,
  editTodo,
  getTodoById,
  deleteTodo,
} = require('./todos.controller');

const todoResolvers = {
  Query: {
    todos: getTodos,
    todo: getTodoById,
  },
  Mutation: {
    createTodo: createTodo,
    editTodo: editTodo,
    deleteTodo: deleteTodo,
  },
  Subscription: {
    todo: {
      subscribe: (_, __, ctx) => {
        const { pubsub } = ctx;
        return pubsub.asyncIterator('NEW_TODO');
      },
    }
  },
};

module.exports = todoResolvers;
