
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

var hammer;
var ground;
var stone1, stone2;
var sand1, sand2, sand3, sand4;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer = new Hammer(400,350);
    ground = new Ground(400,690,800,10);
    stone1 = new Stone(400,600,50,50,"black");
    stone2 = new Stone(500,550,100,100,"yellow");
    sand1 = new Sand(200,500,5);
    sand2 = new Sand(250,500,5);
    sand3 = new Sand(300,500,5);
    sand4 = new Sand(350,500,5);
  
}


function draw() {
  background("cyan");
  Engine.update(engine);
  hammer.display(); 
  ground.display();
  stone1.display();
  stone2.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
}



