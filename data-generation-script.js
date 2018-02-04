const fs = require('fs');

var writeStream = fs.createWriteStream('mock_data/test-newtable.csv');

var startTime = 1514764800;
var endTime = 1514851200;
var timeInterval = 30000;
var latMin = 37.73;
var latMax = 37.83;
var longMin = 122.37;
var longMax = 122.47;

for(var i = 0; i <= 10; i++) {
  var start = [(Math.random() * (latMax - latMin) + latMin).toFixed(2) * 1, (Math.random() * (longMax - longMin) + longMin).toFixed(2) * 1];
  var end = [(Math.random() * (latMax - latMin) + latMin).toFixed(2) * 1, (Math.random() * (longMax - longMin) + longMin).toFixed(2) * 1];
  var distance = Math.floor(Math.random() * (7 - 1)) + 1;
  var time1 = Math.floor(Math.random() * (endTime - startTime)) + startTime;
  var surge = (Math.random() * (4 - 1 + 1) + 1).toFixed(2) * 1;
  var price = Math.round(Math.random() * (25 - 4) + 4, 2);
  var time2 = Math.floor(Math.random() * ((time1 + timeInterval) - time1)) + time1;
  var accept = Math.random() >= 0.5;
  var time3 = Math.floor(Math.random() * ((time2 + timeInterval) - time2)) + time2;
  writeStream.write(i + ';' + JSON.stringify(start) + ';' + JSON.stringify(end) + ';' + time1 + ';' + price + ';' + surge + ';' + time2 + ';' + accept + ';' + time3 + '\n');
}

writeStream.end();

// jan01 = 1514764800
// jan31 = 1517356800
// Math.floor(Math.random() * (max - min)) + min
// lat 37.73-37.83
// long 122.37-122.47
// jan01 = 1514764800
// jan02 = 1514851200
