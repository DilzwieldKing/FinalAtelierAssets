var haunt = [];
var wisple;


function preload(){
    wisple = loadImage("Assets/pixil-frame-0 (11).png");
}

function setup(){
  createCanvas(800, 800);
  background('black');
  stroke('white');
  for(var i = 0; i < 10; i++){
    haunt.push(new wisp());
  }

}

function draw (){
  for(var i = 0; i < haunt.length; i++){
    haunt[i].move();
    haunt[i].display();
  }
  background(0, 0, 0, 10);
}

function mousePressed(){
  haunt.push(new wisp());
}

function wisp(){
  this.xcord = random(0, 800);
  this.ycord = random(0, 800);
  this.width = random(20, 40);
  this.speed = random(5, 10);
  

  this.move = function(){
    this.ycord += random(-0.3, 0.3);
    this.xcord += random(-0.3, 0.3);
  }

  this.display = function(){
    fill('white');
    image(wisple, this.xcord, this.ycord, this.width, this.width);
    //ellipse(this.xcord, this.ycord, this.width);
  }
}