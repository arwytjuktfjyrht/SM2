var helicopterIMG, helicopterSprite, packageSprite,packageIMG,side1,side2,bottom;
var packageBody,side1body,side2body,bottomBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	bottom=createSprite(width/2,630,20,200);
	side1=createSprite(width/2-50,540);
	side2=createSprite(width/2+50,540);

	side1Body = Bodies.rectangle(width/2 , 540 , 100 , 20 {restitution:0, isStatic:true} );
	World.add(world, side1body);

	side2Body = Bodies.rectangle(width/2 , 540 , 100 , 20 {restitution:0, isStatic:true} );
	World.add(world, side2body);

	bottomBody = Bodies.rectangle(width/2 , 630 , 20 , 200{restitution:0, isStatic:true} );
	World.add(world, bottomBody);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	side1.shapeColor=color(155);
	side2.shapeColor=color(155);
	bottom.shapeColor=color(155);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  helicopterSprite.display();
  packageSprite.display();
  side1.display();
  side2.display();
  bottom.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyDown("DOWN")) {
	
	Matter.Body.setStatic(packageBody, false);
    
  }
}