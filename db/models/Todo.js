const { Model } = require('objection');

class Todo extends Model {
  static get tableName() {
    return 'todos';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title'],
      
      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 1, maxLength: 255 },
      }
    }
  }
}

module.exports = {
  Todo,
};
