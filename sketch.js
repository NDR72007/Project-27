
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//suspension=createSprite(290,200,600,200);
box1=new Box(300,350,50);
box2=new Box(350,350,50);
box3=new Box(400,350,50);
box4=new Box(450,350,50);
box5=new Box(500,350,50);
//box6=new Box(150,250,30);
 //fill ("brown");
  ground1 = new Ground(400,100,300,40);
  sling1= new Suspender(box1.body,ground1.body,-50*2,0);
  sling2= new Suspender(box2.body,ground1.body,-25*2,0);
  sling3= new Suspender(box3.body,ground1.body,-0*2,0);
  sling4= new Suspender(box4.body,ground1.body,25*2,0);
  sling5= new Suspender(box5.body,ground1.body,50*2,0);
  //sling6= new Suspender(bob6.body,ground1.body,-40*2,0);
	Engine.run(engine);
  
}


function draw() {
  background(100);
//	ground.fill(48,22,8);
	//ground.stroke(0);
  rectMode(CENTER);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box3.display();
  box4.display();
  box5.display();
  //bob6.display();
  ground1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  //sling6.display();

  keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(box1.body,box1.body.position,{x:-100,y:-100}); } 
} 




