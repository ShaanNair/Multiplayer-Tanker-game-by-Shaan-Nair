class Tanker{
    constructor(x, y, width, height) {
        var options = {
        isStatic: true
        
       }
       this.image = loadImage("assets/tanker.png");
        this.body = Bodies.rectangle(x,y,width,height,options)
  
        World.add(world, this.body);
        this.width = width;
        this.height = height;
  
      };
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
  
        if(keyIsDown(LEFT_ARROW) && angle > -1){
          angle -=0.05
          Matter.Body.setAngle( tanker.body, angle);
          var pcPlayerAngle = await database.ref('playerAngle').once("value");
          var pcPlayerAngle = await database.update('playerAngle').once(value-=0.5);
        }
        if(keyIsDown(RIGHT_ARROW) && angle < 0){
          angle +=0.05
          Matter.Body.setAngle( tanker.body, angle);
          var pcPlayerAngle = await database.ref('playerAngle').once("value");
          var pcPlayerAngle = await database.update('playerAngle').once(value+=0.5);
        }
  
        launcherX = pos.x + ((this.height+100) * cos(angle))
        launcherY = pos.y - ((this.height-100) * sin(angle))
  
  
        if(keyIsDown(DOWN_ARROW)){
            Matter.Body.setPosition(canonBall.body, {x: launcherX -100 , y: launcherY +100})
          var pcLauncherPositionX = await database.ref('launcherX').once("value");
          var pcLauncherPositionX = await database.update('launcherX').once(value-=100);
          var pcLauncherPositionY = await database.ref('launcherY').once("value");
          var pcLauncherPositionY = await database.update('launcherY').once(value+=100);  
        }
  
        if(keyIsDown(DOWN_ARROW) && angle >= -0.050){
          Matter.Body.setPosition(canonBall.body,{x:launcherX +100 ,y:launcherY})
          var pcLauncherPositionX = await database.ref('launcherX').once("value");
          var pcLauncherPositionX = await database.update('launcherX').once(value+=100);
        } 
  
        if(keyIsDown(DOWN_ARROW) && angle <= -1.40){
          Matter.Body.setPosition(canonBall.body,{x:launcherX  ,y:launcherY - 100})
          var pcLauncherPositionY = await database.ref('launcherY').once("value");
          var pcLauncherPositionY = await database.update('launcherY').once(value-=100);          }

          if(this.body.speed < 3){
            super.display();
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             image(this.image, this.body.position.x, this.body.position.y, 50, 50);
             pop();
           }
          
        
          
  
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image, this.body.position.x, this.body.position.y, 150, 150);
        rect(0,0,this.width,this.height);
        pop();
        arc(70, height-65, 90, 100, PI , TWO_PI);
        rect(20,height-65,100,20);
        rect(20,height-45,100,20);
  
  
      };
  }