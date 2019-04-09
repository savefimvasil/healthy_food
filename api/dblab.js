const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let personSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{
    type: Schema.Types.ObjectId,
    ref: 'Story'
  }]
});

let storySchema = new Schema({
  title: String,
  description: String
});

let Story = mongoose.model('Story', storySchema);
let Person = mongoose.model('Person', personSchema);
