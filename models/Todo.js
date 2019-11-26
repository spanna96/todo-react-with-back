const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    code: Number,
    text: String,
    color: String,
  }
);

module.exports = mongoose.model('Todo', TodoSchema);