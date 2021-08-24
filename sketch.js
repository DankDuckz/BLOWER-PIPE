const Bodies = Matter.Bodies
const World = Matter.World
const Engine = Matter.Engine
const Body = Matter.Body

var ball

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create()
  world = engine.world
  ball = new Ball(width/2,height/4,40)
  blower = new Blower(width/3.3,height/1.85,200,50)
  mouth = new Blower(width/2,height/2,150,100)

  button = createButton("BLOW")
  button.position(width/2,height/1.3)
  button.size(200,100)
  button.class("blowbutton")
  button.mousePressed(blow)
}

function draw() {
  background("yellow");  
  Engine.update(engine);

  ball.show()
  blower.show()
  mouth.show()
}

function blow() {
  Body.applyForce(ball.body,{x:0,y:0},{x:0,y:-0.1})
}