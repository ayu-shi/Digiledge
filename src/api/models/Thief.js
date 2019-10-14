const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Car
let Thief = new Schema({
  Name: {
    type: String
  },
  City: {
    type: String
  },
  Crime: {
    type: String
  }
},{
    collection: 'thief_module'
});

module.exports = mongoose.model('Thief', Thief);