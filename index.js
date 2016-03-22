/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var server = global.server = express();
var port = 3333;


//
// Register Node.js middleware
// -----------------------------------------------------------------------------
server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//
// Routes
//

server.use('/api', function(req, res){
  res.json({
    name: "james"
  });
});

server.use('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

server.use('/about', function(req, res){
  res.sendFile(path.join(__dirname, 'public/about.html'));
});

server.use('*', function(req, res){
  res.sendStatus(404);
});

//
// Launch the server
// -----------------------------------------------------------------------------
server.listen(port, function(){
  console.log('Server running...');
});
