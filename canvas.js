var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
// c.fillStyle="red";
// c.fillRect(100,100,100,100);
// c.fillStyle="blue";
// c.fillRect(200,200,100,100);
// c.fillStyle="pink";
// c.fillRect(300,300,100,100);
// c.fillStyle="purple";
// c.fillRect(100,200,100,100);

// c.beginPath();
// c.moveTo(600,50);
// c.lineTo(400,300);
// c.strokeStyle="red";
// c.stroke();
//
// c.beginPath();
// c.moveTo(600,50);
// c.lineTo(800,300);
// c.strokeStyle="blue";
// c.stroke();
//
//
// c.beginPath();
// c.moveTo(400,300);
// c.lineTo(800,300);
// c.strokeStyle="green";
// c.stroke();
//
// // c.beginPath();
// // c.fillStyle="red";
// // c.arc(200,500,40,0,2 * Math.PI,false);
// // c.stroke();
//
// for(let i=0; i<=2000; i++){
//   let hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.strokeStyle=hue;
//   c.arc(x,y,30,0,2 * Math.PI,false);
//   c.stroke();
// }
function Circle(x,y,dx,dy,radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    let hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    c.beginPath();
    c.strokeStyle=hue;
    c.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
    c.stroke();
    
  };

  this.update = function(){
    if ((this.x+this.radius) > innerWidth || (this.x-this.radius) < 0){
      this.dx = -this.dx;
    }

    if((this.y+this.radius) > innerHeight || (this.y-this.radius) < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };

}



let circleArray = [];

for(let i=0; i<500; i++){
  let radius = 30;
  let x = Math.random() * (innerWidth - radius*2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dy = (Math.random() - 0.5) * 1;
  let dx = (Math.random() - 0.5) * 1;

  circleArray.push(new Circle(x,y,dx,dy,radius));

}

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);
  circleArray.forEach(circle=>circle.update());
}

animate();









console.log(canvas);
