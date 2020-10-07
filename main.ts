namespace motorWorks {
    
    function carController(Speed: number,Crashed: number, Done: number) {
    if (Crashed = 1) {
        Done += Speed
    }
    basic.showNumber(Done)

    }

    function mapsLapsDone(Map: number,Laps: number,Done: number) {
    if (Map = 1) {
    
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
   //% block="spawns map $index $index2"
   //% index.min=1 index.max=3
   //% index2.min=1 index2.max=10
    export function choseMAP(index: number, index2: number):  void { 
        let sprite = game.createSprite(0, 4)
    let sprite2 = game.createSprite(0, 3)
    let sprite3 = game.createSprite(0, 2)
    let sprite4 = game.createSprite(0, 1)
    let sprite5 = game.createSprite(0, 0)
    let sprite9 = game.createSprite(4, 0)
    let sprite10 = game.createSprite(4, 1)
    let sprite11 = game.createSprite(4, 2)
    let sprite12 = game.createSprite(4, 3)
    let sprite13 = game.createSprite(4, 4)

    if (index = 1) {
        mapsLapsDone(index, index2, 0) //1. straightAway
    }    
    
    if (index = 2) {
        mapsLapsDone(index, index2, 0) //2. Oval
    }
    
    if (index = 3) {
        mapsLapsDone(index, index2, 0)// 3. goCart
    }
  } 
}