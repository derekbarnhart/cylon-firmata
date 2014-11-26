var Cylon = require('cylon');

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
  },

  devices: {
    mpl115a2: { driver: 'mpl115a2' }
  },

  work: function(my) {
    my.mpl115a2.getTemperature(function(err, data) {
      var temp = data['temperature'],
          pressure = data['pressure'];

      console.log("temperature " + temp  + " pressure " + pressure);
    });
  }
}).start();
