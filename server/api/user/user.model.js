'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  sex: Number,
  age: Number,
});

module.exports = mongoose.model('user', UserSchema);