var tree;
var mango;
var mango_image


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	mango_image =loadImage("mango.png");
}

function setup() {
	createCanvas(800, 700);

	tree = createSprite(700,600,30,400); 
	mango = createSprite(700,420,50,50)
	mango.loadInage("mango", mango_image);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



