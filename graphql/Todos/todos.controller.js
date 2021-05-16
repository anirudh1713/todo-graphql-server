const { Todo } = require('../../db/models/Todo');

const getTodos = async () => {
  try {
    const todos = await Todo.query();
    return todos;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const createTodo = async (_, args) => {
  const { title } = args;
  try {
    const todo = await Todo.query().insertAndFetch({ title });
    return todo;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = {
  getTodos,
  createTodo,
}
