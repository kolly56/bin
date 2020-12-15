
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinO, paper1, ground1;
var engine, world;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


dustbinO=new dustbin(1150,650);
paper1=new paper(200,450,40);
ground1=new ground(width/2,670,width,20);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  dustbin1.display();
  paper1.display();
  ground1.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-90});
	}
}

