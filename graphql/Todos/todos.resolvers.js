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
};

module.exports = todoResolvers;
