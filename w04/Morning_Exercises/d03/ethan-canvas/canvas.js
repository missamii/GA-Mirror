console.log('canvas.js is loaded!');

// declare global variables

var canvas = document.createElement('canvas');
var c = canvas.getContext('2d');

$(document).ready(function() {
  var imageObj = new Image();
  imageObj.src = "IMG_0363.jpg";
  // initial drawing of canvas and append it to body
  canvas.width = $(window).width();
  canvas.height = $(window).height();
  c.fillStyle = 'black';
  c.fillRect(0,0,$(window).width(), $(window).height());
  // c.drawImage(imageObj,0,0,$(window).width(), $(window).height)
  $(canvas).appendTo('body');
  // c.drawImage(imageObj, this.x, this.y, 80, 80);
  
  // fireworks time!
  var fireworks = {};
  var fireworkIndex = 0;
  var fireworkNum = 20;
  var mouseX;
  var mouseY;

  $(document).on('click', function(event) {
      for (var f in fireworks) {
        fireworks[f].vx *= 10;
        fireworks[f].vy *= 10;
      }
  });

  $(document).on('mousemove', function(event) {
    // console.log('mouseX', event.pageX);
    // console.log('mouseY', event.pageY);
    mouseX = event.pageX;
    mouseY = event.pageY;
  });

  function Firework() {
    // set initial location of firework to mouse position
    this.x = mouseX;
    this.y = mouseY;

    // initial velocities
    this.vx = Math.random() * 20 - 10;
    this.vy = Math.random() * 20 - 10;

    // increment the fireworkIndex
    // add this firework to the fireworks object with
    // an id
    fireworkIndex ++;
    fireworks[fireworkIndex] = this;
    this.id = fireworkIndex;

    // add a lifespan
    this.life = 0;
    this.maxLife = Math.random() * 20 + 20;
  }

  Firework.prototype.draw = function() {
    this.x += this.vx;
    this.y += this.vy;
    // console.log("hi I'm drawing firework #", this.id);
    // console.log(this);

    if (Math.random() < 0.1) {
      this.vx = Math.random() * 20 - 10;
      this.vy = Math.random() * 20 - 10;
    }
    c.fillStyle = 'red';
    c.fillStyle = 'rgb('
      + Math.floor(Math.random() * 255) + ","
      + Math.floor(Math.random() * 255) + ","
      + Math.floor(Math.random() * 255) + ")";
    //rgb(111,222,333)
    c.fillRect(this.x, this.y, 5, 5);
    // c.drawImage(imageObj, this.x, this.y, 80, 80);

    this.life++;
    if(this.life >= this.maxLife) {
      delete fireworks[this.id];
    }
  }

  setInterval(function() {
    c.fillStyle = 'black';
    c.fillRect(0,0,$(window).width(), $(window).height());

    for (var i = 0; i < fireworkNum; i++) {
      new Firework();
    }

    for(var num in fireworks) {
      fireworks[num].draw();
    }
  }, 30);

    resizeCanvas();

});

function resizeCanvas() {
  $(window).resize(function(event) {
    canvas.width = $(window).width();
    canvas.height = $(window).height();
    c.fillStyle = 'black';
    c.fillRect(0,0,$(window).width(), $(window).height());
    $(canvas).appendTo('body');
  })
};
