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

const getTodoById = async (_, args) => {
  const { id } = args;
  try {
    const todo = await Todo.query().findById(id);
    return todo;
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

const editTodo = async (_, args) => {
  const { id, title } = args;
  try {
    const todo = await Todo.query().patchAndFetchById(id, { title });
    return todo;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const deleteTodo = async (_, args) => {
  const { id } = args;
  try {
    const todo = await getTodoById(null, { id });
    await Todo.query().deleteById(todo.id);
    return todo;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  editTodo,
  deleteTodo,
}
