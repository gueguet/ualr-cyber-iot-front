// GAUGE




$(document).ready(function(){



  setInterval(function(){

    req = $.ajax({
      url : '/update'
    });

    req.done(function(data) {

      console.log(data);

      $('#value_x').html(data.xvalue);
      $('#value_y').html(data.yvalue);
      $('#value_z').html(data.zvalue);
      $('#humidity_value').html(data.humidity);
      $('#degree_value_fahr').html(Math.ceil(data.temperature - 30.00));
      $('#degree_value_cel').html(Math.ceil(data.temperature - 62.00));
      $('#pressure_value').html(data.pressure);
      


    })


  }, 1000);


});

  // alert("fiwejfejwfjweio");

  // console.log("test");

  // var accData = JSON.parse('{{ accData | tojson | safe}}');

  // alert("yo");

  // var accData = JSON.parse('{{ accData | tojson | safe}}');
  // alert(accData.yacc);

  // var opts = {
  //   angle: 0.1, // The span of the gauge arc
  //   lineWidth: 0.1, // The line thickness
  //   radiusScale: 1, // Relative radius
  //   pointer: {
  //     length: 0.4, // // Relative to gauge radius
  //     strokeWidth: 0.03, // The thickness
  //     color: '#000000' // Fill color
  //   },
  //   limitMax: false,     // If false, max value increases automatically if value > maxValue
  //   limitMin: false,     // If true, the min value of the gauge will be fixed
  //   colorStart: '#6FADCF',   // Colors
  //   colorStop: '#8FC0DA',    // just experiment with them
  //   strokeColor: '#E0E0E0',  // to see which ones work best for you
  //   generateGradient: true,
  //   highDpiSupport: true,     // High resolution support
  // }

  // var targetXGauge = document.getElementById('xGauge'); // your canvas element
  // var accXGauge = new Gauge(targetXGauge).setOptions(opts); // create sexy gauge!
  // accXGauge.maxValue = 3000; // set max gauge value
  // accXGauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  // accXGauge.animationSpeed = 50; // set animation speed (32 is default value)
  // accXGauge.set(2000); // set actual value


  // var targetYGauge = document.getElementById('yGauge'); // your canvas element
  // var accYGauge = new Gauge(targetYGauge).setOptions(opts); // create sexy gauge!
  // accYGauge.maxValue = 3000; // set max gauge value
  // accYGauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  // accYGauge.animationSpeed = 50; // set animation speed (32 is default value)
  // accYGauge.set(100); // set actual value

  // var targetZGauge = document.getElementById('zGauge'); // your canvas element
  // var accZGauge = new Gauge(targetZGauge).setOptions(opts); // create sexy gauge!
  // accZGauge.maxValue = 3000; // set max gauge value
  // accZGauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  // accZGauge.animationSpeed = 50; // set animation speed (32 is default value)
  // accZGauge.set(1000); // set actual value
