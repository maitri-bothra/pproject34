
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
canvas = createCanvas(windowWidth/2, windowHeight/1.5);
engine = Engine.create();
world = engine.world;

let canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();
let options = {
	mouse: canvasmouse
}
mConstraint = MouseConstraint.create(engine.options);
World.add(world,mConstraint);

pendulum1 = new Pendulum(30,40,this.color);
rope1 = new Rope(this.body,{x:200, y:200}); 


}


function draw() {
  rectMode(CENTER);
  background(0);
  
  pendulum1.display();
  rope1.display();
}

function mouseDragged(){
	Matter.Body.setPositionn(pendulum1.body,{x:mouseX, y:mouseY});
}

