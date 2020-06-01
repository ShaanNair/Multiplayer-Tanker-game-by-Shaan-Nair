class Form{

  constructor() {
    this.input = createInput("Name");
    this.button1 = createButton('Player Vs Computer Vs Computer Vs Computer');
    this.button2 = createButton('Player Vs Player Vs Computer Vs Computer');
    this.button3 = createButton('Player Vs Player Vs Player Vs Computer');
    this.button4 = createButton('Player Vs Player Vs Player Vs Player');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Tanker Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button1.mousePressed(()=>{
      flag=1;
      hide();
    });
    this.button2.mousePressed(()=>{
      flag=2;
      hide();
    });
    this.button3.mousePressed(()=>{
      flag=3;
      hide();
    });
    this.button4.mousePressed(()=>{
      flag=4;
      hide();
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
