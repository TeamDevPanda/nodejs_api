var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  firstname : { type : String },
  lastname 	: { type : String },
  password 	: { type : String },
  email 	: { type : String },
  date 		: { type : String },
  network	: { type : String },
  phone		: { type : String }
});

module.exports.users 		= mongoose.model('users', userSchema, "users");