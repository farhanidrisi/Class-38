class Game{
    constructor(){
    
    }
    getState(){
    var gameStateref=database.ref("gameState");
    gameStateref.on("value",function(data){
    gameState=data.val()
    })
    }
    update(state){
        database.ref("/").update({
           gameState:state 
        })
    }
    start(){
        if(gameState===0){
            player=new Player()
            player.getCount()
            form=new Form()
            form.display()

        }

        car1= createSprite(100,200)
        car2= createSprite(300,200)
        car3= createSprite(500,200)
        car4= createSprite(700,200)
        Cars= [car1,car2,car3,car4]
    }
    play(){
        form.hide()
       // textSize(30)
        //text("Game Start",120,100)
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
          //  var display_position=130
          var index=0;
          var x=0;
          var y;
            for(var plr in allPlayers){
                index+=1;
                x+=200;
                y=displayHeight-allPlayers[plr].distance
                /*display_position+=20
                textSize(15)
                text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position)*/
                Cars[index-1].x=x;
                Cars[index-1].y=y;
                if(index===player.index){
                    Cars[index-1].shapeColor="red"
                    camera.position.x=displayWidth/2;
                    camera.position.y=Cars[index-1].y;
                }
            }
            drawSprites();

        

            
        }
        if (keyDown(UP_ARROW)&&player.index!==null){
            player.distance+=50
            player.update()
        }
    }
}