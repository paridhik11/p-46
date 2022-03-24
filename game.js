class Game{
    constructor(){
        this.resetTitle = createElement("h2");
        this.resetButton = createButton("");
    
        this.leadeboardTitle = createElement("h2");
    
        this.leader1 = createElement("h2");
        this.leader2 = createElement("h2");
        //this.playerMoving=false
      }        
    }
    getState(){
        var base=database.ref("gameState")
        base.on("value",function(data){
            gameState=data.val()
        })
    }

    update(state){
database.ref("/").update({
    gameState:state
})
}
    start() {
        player = new Player();
        playerCount = player.getCount();
    
        form = new Form();
        form.display();
    
        surfer1 = createSprite(width / 2 - 50, height - 100);
        surfer1.addImage("surfer1",surferimg);
     surfer1.scale = 0.07;
    
        surfer2 = createSprite(width / 2 + 100, height - 100);
        surfer2.addImage("surfer2", surferimg);
        surfer2.scale = 0.07;
    
      surfers = [surfer1,surfer2];
    
        fuels = new Group();
       goldCoins = new Group();
       bigball=new Group(
           trash=new Group()
       )
    
         = new Group();
    }
  
}
