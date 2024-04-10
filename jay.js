var arDrone = require('ar-drone');
var client = arDrone.createClient();
var fs = require('fs');
var output = fs.createWriteStream('./video.h264');

// 连接到无人机
client.takeoff();

// 启动视频录制
var video = client.getVideoStream();
video.pipe(output);

// 在起飞后等待一段时间，然后前进
client
  .after(1000, function() {
    this.up(0.5);
  })

  .after(2000, function() {
    this.stop();
    this.front(0.5);
  })

  .after(5000, function() {
    this.stop();
    this.clockwise(0.5);
  })

  .after(900, function() {
    this.stop();
    this.front(0.5);
  })

  .after(1000, function() {
    this.stop();
    this.clockwise(0.5);
  })

  .after(900, function() {
    this.stop();
    this.front(0.5);
  })

  .after(5000, function() {
    this.stop();
    this.land();
  });

client.getPngStream()
  .on('data', console.log);
