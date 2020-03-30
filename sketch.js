var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;
 
 
function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground1=new Ground(200,390,400,10);
    base=Bodies.rectangle(200,310,160,200);
    up=Bodies.rectangle(200,230,80,80);
}
function draw(){
background(0);
Engine.update(engine);
ground1.display();
fill('gray')
ellipseMode(CENTER);
ellipse(200,200,175,175)
fill(255)
rectMode(CENTER);
rect(200,310,160,160);

}