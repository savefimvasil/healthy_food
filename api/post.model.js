const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema({
  titleUA: {
    type: String
  },
  titleRU: {
    type: String
  },
  img: {
    type: String
  },
  descriptionUA: {
    type: String
  },
  descriptionRU: {
    type: String
  },
  miniDescriptionUA: {
    type: String
  },
  miniDescriptionRU: {
    type: String
  }
},{
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);
