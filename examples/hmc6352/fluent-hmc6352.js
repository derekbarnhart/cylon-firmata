var Cylon = require('cylon');

Cylon
  .robot()
  .connection({ name: 'arduino', adaptor: 'firmata', port: '/dev/ttyACM0' })
  .device({ name: 'hmc6352', driver: 'hmc6352' })
  .on('ready', function(bot) {
    setInterval(function() {
      bot.hmc6352.heading(function(data) {
        console.log("heading: " + data);
      });
    }, 1000);
  });

Cylon.start();