namespace motorWorks {
    
    function carController(Speed: number,Crashed: number, Done: number) {
    if (Crashed = 1) {
        Done += Speed
    }
    basic.showNumber(Done)

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
   //% block="spawns map $index $index2"
   //% index.min=1 index.max=3
    export function choseMAP(index: number, index2: number):  void { 

    carController(1, 1, 1)

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