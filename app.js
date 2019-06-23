var mongoose = require('mongoose');
var assert = require('assert');

var Tutorials = require('./schema.js');

var url = "mongodb://localhost:27017/MyDb";
mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));
db.on('open', function(){
  console.log('Connected');
});

var newTopic = Tutorials({
  topic: 'Express.js',
  description: 'Express Framework'
});

newTopic.save(function(err){
  if(err) throw err;

  Tutorials.find({}, function(err, data){
    if(err) throw err;
    console.log(data);
  });
});