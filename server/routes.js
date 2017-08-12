/**
 * Main application routes
 */

'use strict';

var path = require('path');
var fs = require('fs');

module.exports = function(app) {
  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  // 用户信息
  app.use('/api/user', require('./api/user'));
  // 首页
  app.get('/',function(req,res){
      res.sendFile(path.normalize(__dirname+'./../app/index.html'));
  });
};
