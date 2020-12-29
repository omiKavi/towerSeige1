const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var polygon;
var slingShot;

function preload()
{

}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

//level two
box1 = new Box(330, 235, 30, 40);
box2 = new Box(360, 235, 30, 40);
box3 = new Box(390, 235, 30, 40);
box4 = new Box(420, 235, 30, 40);
box5 = new Box(450, 235, 30, 40);

//level three
box6 = new Box(360, 195, 30, 40);
box7 = new Box(390, 195, 30, 40);
box8 = new Box(420, 195, 30, 40);
//top
box9 = new Box(390, 155, 30, 40);
polygon = Bodies.circle(50,200,20);
World.add(world, polygon);

slingShot = new Slingshot(this.polygone, {x:100,y:200});
}

function draw() {  
  background(46, 139, 87);
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  ground.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
