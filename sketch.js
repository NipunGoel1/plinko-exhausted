const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 

var plinkos = [];
var divisions = [];
var score = 0;
var particle;
var turn = 0;
var gameState = "start";


var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
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
  background("black");
  text("200",20,550);
  text("200",100,550);
  text("200",180,550);
  text("200",260,550);
  text("100",340,550);
  text("100",420,550);
  text("100",500,550);
  text("100",580,550);
  text("300",660,550);
  text("300",740,550);
  textSize(20)
 text("Score : "+score,20,30);
 
  Engine.update(engine);
 console.log(gameState)
  if(gameState === "end"){
    text("Game Over",360,420)
    text("Press Space to Restart",310,440)
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle != null){
     particle.display();
     if(particle.body.position.y>500){
          if(particle.body.position.x<320 && particle.body.position.x>0){
            score = score+200;
            particle = null;
            turn++;
            if (turn >= 5) {
              gameState ="end";
            }

          }else if(particle.body.position.x>320 && particle.body.position.x<640){
            score = score+100;
            particle = null;
            turn++;
            if (turn >= 5) {
              gameState ="end";    
            }
          }else if(particle.body.position.x>640 && particle.body.position.x<800 ){
            score = score+300;
            particle = null;
            turn++;
            if (turn >= 5) {
              gameState ="end"; 
            }
          }else{
            particle = null;
            turn++;
            if (turn >= 5) {
              gameState ="end"; 
            }
          }
        }
    }
   
  }  
  

function mousePressed(){
  if (gameState !== "end"){
    particle = new Particle(mouseX,10,10);
   
   
  }
  
}
function keyPressed(){
  if(keyCode === 32 && gameState ==="end"){
    gameState = "start";
    turn = 0;
    score = 0;
    particles = [];
   
}
}