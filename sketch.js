const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle;
var ground;
var divisions1, divisions2, divisions3, divisions4, divisions5;
var divisionHeight = 300;
var score = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  divisions1 = new Divisions(200,800,40,40);
  divisions2 = new Divisions(300,800,40,40);
  divisions3 = new Divisions(400,800,40,40);
  divisions4 = new Divisions(500,800,40,40);
  divisions5 = new Divisions(600,800,40,40);

  for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50) 
  {
    
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
    
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width; j=j+50) 
  {
    
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
    
    plinkos.push(new Plinko(j,375));
  }

    

    
}
 


function draw() {
  background(0);
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }
 
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

   ground.display();
   divisions1.display();
   divisions2.display();
   divisions3.display();
   divisions4.display();
   divisions5.display();

   drawSprites();
}