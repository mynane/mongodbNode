'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// Objectid
// Array
var UserSchema = new Schema({
  // 用户名
  userName: { type: String, unique: true },
  // 密码
  password: { type: String },
  // 显示名
  userDspName: String,
  // 性别0：女，1：男
  sex: { type: Number, default: 1 },
  // 生日
  birthday: {type: Date, default: Date.now},
  // 手机号
  phone: Number,
  // 邮箱
  email: String,
  // 是否可用, 默认可用
  activity: {type: Boolean, default: 1},
  // ？
  userType: {type: String},
  // ?
  style: {type: String}
});

module.exports = mongoose.model('user', UserSchema);