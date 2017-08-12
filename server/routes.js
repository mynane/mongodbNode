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
  app.use('/', function (req,res){
    fs.readFile('./app/index.html', function(error, data){
        console.log(error);
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data,'utf-8');
    })
  })
};
