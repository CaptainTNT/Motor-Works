namespace motorWorks {
    
    function carController(Speed: number,Crashed: number, Done: number) {
    if (Crashed = 1) {
        Done += Speed
    }


    }

    /**
    * Spawns Car with controls 
    */
   //% blockId=Car Spawner
   //% block="Spawn Car"
    export function spawnCar():  void {
        game.addLife(3)
        let Car = game.createSprite(2, 4)
    input.onButtonPressed(Button.A, function () {
    Car.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Car.change(LedSpriteProperty.X, 1)
})
}
    /**
    * Turns on gass
    */
   //% blockId=Car Gass
   //% block="Gass on"
    export function gassOn():  void {
    let Gass = 100
    basic.forever(function () {
    if (game.isGameOver() == false) {
        if (Gass != 0) {
            Gass += -1
            basic.pause(100)
        }
        if (Gass == 0) {
            game.gameOver()
        }
    }
})
  }
    /**
    * Spawns map
    */
   //% blockId= spawn map
   //% block="spawns map"
    export function choseMAP(index: number, index2: number):  void { 
    let Done = 0

    basic.showNumber(Done)

    basic.forever(function () {
    if (index = 1) {
        
    }    
    
    if (index = 2) {
        
    }
    
    if (index = 3) {
        
    }



    })    
  } 
}