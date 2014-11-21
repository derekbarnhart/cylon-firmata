var Cylon = require('cylon');

Cylon
  .robot()
  .connection({ name: 'arduino', adaptor: 'firmata', port: '/dev/ttyACM0' })
  .device({ name: 'led', driver: 'led', pin: 13 })
  .on('ready', function(bot) {
    setInterval(function() {
      bot.led.toggle();
    }, 1000);
  });

Cylon.start();