const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var bottom_wall;
var left;
var right;
var top_wall;

var b1,b2;

var ball;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  bottom_wall=new Wall(200,390,400,20);
  top_wall=new Wall(200,10,400,20);
  left=new Wall(10,200,20,400);
  right=new Wall(390,200,20,400);

  var op={
    restitution:0.95

  }
  ball=Bodies.circle(200,100,20,op);
  World.add(world,ball);
  

  b1=createImg('right.png');
  b1.position(280,30);
  b1.size(50,50);
  b1.mouseClicked(hForce);

  b2=createImg('up.png');
  b2.position(20,30);
  b2.size(50,50);
  b2.mouseClicked(hForce,wForce);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
 
  Engine.update(engine);

  bottom_wall.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20);
}


function hForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0} );
  
}

function wForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05} );
  
}