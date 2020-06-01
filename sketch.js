const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var database;
var engine, world;
var tanker1,tanker2,tanker3,tanker4;
var ground;
var bg;
var flag=0;
var score=0;
var Pc;
var pcPlayerCount;
var pcPlayerAngle;
var pcLauncherPositionX,pcLauncherPositionY;
function preload() {
    bg=loadImage("assets/backgroundImage")
}
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    database=firebase.database();
    world = engine.world;
    var ground = new Ground(400,400,20,200);
    
    if (flag=1){ 
    var tanker1= new tanker();
    var tanker2= new Npc();
    var tanker3= new Npc();
    var tanker4= new Npc();
    if (tanker1.Visiblity < 0 && tanker1.Visiblity > -1005 && tanker2.Visiblity <= 0 && tanker3.Visiblity <= 0 && tanker4.Visiblity <= 0){
        score++;
        text(tanker1.input + " wins The Game",200,200);
   }
   if (tanker2.Visiblity < 0 && tanker2.Visiblity > -1005 && tanker1.Visiblity <= 0 && tanker3.Visiblity <= 0 && tanker4.Visiblity <= 0){
    score++;
    text("You Lose",200,200);
}
if (tanker3.Visiblity < 0 && tanker3.Visiblity > -1005 && tanker2.Visiblity <= 0 && tanker1.Visiblity <= 0 && tanker4.Visiblity <= 0){
score++;
text("You Lose",200,200);
}
if (tanker4.Visiblity < 0 && tanker4.Visiblity > -1005 && tanker2.Visiblity <= 0 && tanker3.Visiblity <= 0 && tanker1.Visiblity <= 0){
score++;
text("You Lose",200,200);
    }
    if (flag=2){
        var tanker1= new tanker();
        var tanker2= new tanker();
        var tanker3= new Npc();
        var tanker4= new Npc();
        gameState= 0; 
        var pcPlayerCountRef =  database.ref('playerCount').once("value");
        var pcPlayerCountRef =  database.update('playerCount').once(value+=2);
        if(pcPlayerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
          if (tanker1.Visiblity < 0 && tanker1.Visiblity > -1005 && tanker2.Visiblity <= 0 && tanker3.Visiblity <= 0 && tanker4.Visiblity <= 0){
            score++;
            text(tanker1.input + " wins The Game",200,200);
       }
       if (tanker2.Visiblity < 0 && tanker2.Visiblity > -1005 && tanker1.Visiblity <= 0 && tanker3.Visiblity <= 0 && tanker4.Visiblity <= 0){
        score++;
        text(tanker2.input + " wins The Game",200,200);
   }
   if (tanker3.Visiblity < 0 && tanker3.Visiblity > -1005 && tanker2.Visiblity <= 0 && tanker1.Visiblity <= 0 && tanker4.Visiblity <= 0){
    score++;
    text("You All Lose",200,200);
}
if (tanker4.Visiblity < 0 && tanker4.Visiblity > -1005 && tanker2.Visiblity <= 0 && tanker3.Visiblity <= 0 && tanker1.Visiblity <= 0){
score++;
text("You All Lose",200,200);
    }
        }
    }
    if (flag=3){
        var tanker1= new tanker();
        var tanker2= new tanker();
        var tanker3= new tanker();
        var tanker4= new Npc();
        gameState=0;
        var pcPlayerCountRef = database.ref('playerCount').once("value");
        var pcPlayerCountRef =  database.update('playerCount').once(value+=3);
        if(pcPlayerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
          if (tanker1.Visiblity < 0 && tanker1.Visiblity > -1005 && tanker2.Visiblity <= 0 && tanker3.Visiblity <= 0 && tanker4.Visiblity <= 0){
            score++;
            text(tanker1.input + " wins The Game",200,200);
       }
       if (tanker2.Visiblity < 0 && tanker2.Visiblity > -1005 && tanker1.Visiblity <= 0 && tanker3.Visiblity <= 0 && tanker4.Visiblity <= 0){
        score++;
        text(tanker2.input + " wins The Game",200,200);
   }
   if (tanker3.Visiblity < 0 && tanker3.Visiblity > -1005 && tanker2.Visiblity <= 0 && tanker1.Visiblity <= 0 && tanker4.Visiblity <= 0){
    score++;
    text(tanker3.input + " wins The Game",200,200);
}
if (tanker4.Visiblity < 0 && tanker4.Visiblity > -1005 && tanker2.Visiblity <= 0 && tanker3.Visiblity <= 0 && tanker1.Visiblity <= 0){
score++;
text("You All Lose",200,200);
    }
}
    if (flag=4){
        var tanker1= new tanker();
        var tanker2= new tanker();
        var tanker3= new tanker();
        var tanker4= new tanker();
        gameState=0;
        var pcPlayerCountRef = database.ref('playerCount').once("value");
        var pcPlayerCountRef =  database.update('playerCount').once(value+=4);
          if(pcPlayerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();}
            if (tanker1.Visiblity < 0 && tanker1.Visiblity > -1005 && tanker2.Visiblity <= 0 && tanker3.Visiblity <= 0 && tanker4.Visiblity <= 0){
                score++;
                text(tanker1.input + " wins The Game",200,200);
           }
           if (tanker2.Visiblity < 0 && tanker2.Visiblity > -1005 && tanker1.Visiblity <= 0 && tanker3.Visiblity <= 0 && tanker4.Visiblity <= 0){
            score++;
            text(tanker2.input + " wins The Game",200,200);
       }
       if (tanker3.Visiblity < 0 && tanker3.Visiblity > -1005 && tanker2.Visiblity <= 0 && tanker1.Visiblity <= 0 && tanker4.Visiblity <= 0){
        score++;
        text(tanker3.input + " wins The Game",200,200);
   }
   if (tanker4.Visiblity < 0 && tanker4.Visiblity > -1005 && tanker2.Visiblity <= 0 && tanker3.Visiblity <= 0 && tanker1.Visiblity <= 0){
    score++;
    text(tanker4.input + " wins The Game",200,200);
}
}


function draw(){
background(bgImage)
Engine.update(engine);
text(" Score :" + score, 200,200);
ground.display();
tanker1.display();
tanker2.display();
tanker3.display();
tanker4.display();
}
    }
function shoot(){
    if (keyIsDown(32)) {
        Matter.Body.setPosition(canonball.body, { x: launcherX-88 , y: launcherY-40 })
    }
    if (keyIsDown(32) && angle<-11) {
      Matter.Body.setPosition(canonball.body, { x: launcherX-120, y: launcherY-20 })
  }
  if (keyIsDown(32) && angle<-11 && angle>-20) {
    Matter.Body.setPosition(canonball.body, { x: launcherX-100 , y: launcherY-60 })
}
if (keyIsDown(32) && angle<-20 && angle>-30) {
  Matter.Body.setPosition(canonball.body, { x: launcherX-70 , y: launcherY-80 })
}
}
function npcShoot(){
    Matter.Body.setPosition(canonball.body, {x: tanker.launcherX , y: tanker.launcherY});
}
}
}