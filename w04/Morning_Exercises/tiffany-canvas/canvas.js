// console.log("hey there");

var canvas = document.createElement("canvas");
var c = canvas.getContext("2d");

$(document).ready(function(){
 canvas.width = $(window).width();
 canvas.height = $(window).height();
 c.fillStyle = "black";
 c.fillRect(0, 0, $(window).width(),$(window).height());
 $(canvas).appendTo("body");

 // var imageObj = new Image();
 // imageObj.src = "IMG_0363.jpg"

 var fireworks = {};
 var fireworksIndex = 0;
 var fireworkNum = 20;
 var mouseX;
 var mouseY;

 $(document).on ('click', function(event) {
   for (var f = 0; f < fireworks; i++) {
    fireworks[i]
   }
   mouseY = event.pageY
   mouseX = event.pageX
 });

 function Firework() {
   this.x = mouseX;
   this.y = mouseY;
   this.vx = Math.random() * 20 - 10;
   this.vy = Math.random() * 20 - 10;

   fireworksIndex ++;
   fireworks[fireworksIndex] = this; //fireworks object with property of fireworksIndex
   this.id = fireworksIndex;

   this.Life = 0;
   this.maxLife = Math.random() * 20 + 20;
 }

 Firework.prototype.draw = function () {
   this.x += this.vx;
   this.y += this.vy;
    // console.log("hi im drawing" + this.id);
    // console.log(this);
    // debugger;

   if (Math.random() < 0.1){
     this.vx = Math.random() * 20 - 10;
     this.vy = Math.random() * 20 - 10;
   }
   c.fillStyle = "red";
   c.fillStyle = "rgb("
   + Math.floor (Math.random() * 225) + ","
   + Math.floor (Math.random() * 225) + ","
   + Math.floor (Math.random() * 225) + ")";

   c.fillRect (this.x, this.y, 5, 5);

  //  c.drawImage(imageObj, this.x, this.y, 80, 80);
   this.life ++;
   if (this.life >= this.maxLife){
     delete fireworks[this.id];
   }
 };

 setInterval(function() {
   c.fillStyle = "black";
   c.fillRect(0,0,$(window).width(),$(window).height());

     for (var i = 0; i < fireworkNum; i++){
       new Firework ();
     }
     for (var num in fireworks) {
       fireworks[num].draw();
     }
 }, 30);

 resizeCanvas();

});


function resizeCanvas() {
 $(window).resize(function(event) {
   canvas.width = $(window).width();
   canvas.height = $(window).height();
   c.fillStyle = "black";
   c.fillRect(10, 10, $(window).width(), $(window).height());
   $(canvas).appendTo("body");
 });

};
