namespace motorWorks {
    let Done = 0
    let Crashed = false
    let lapsDone = 0
    function carController(Speed: number) {
    if (Crashed = true) {
        Done += Speed
        }
    }

    function mapsLapsDone(Map: number,Laps: number,) {
    lapsDone = Math.max(0, Laps)
    if (Map = 1) {

    }

    if (Map = 2) {

    }

    if (Map = 3) {

    }

    basic.forever(function () {
        if (Crashed = false) {
            if (Done != 100) {
                Done += 1
                basic.pause(100)
            } else {
                lapsDone = lapsDone + 1
                Done = 0
            }
        }
    })

    }
    /**
    * Spawns Car with controls 
    */
   //% blockId=Car Spawner
   //% block="Spawn Car"
    export function spawnCar():  void {
        let Crashed = 2
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
        mapsLapsDone(index, index2) //1. straightAway
    }    
    
    if (index = 2) {
        mapsLapsDone(index, index2) //2. Oval
    }
    
    if (index = 3) {
        mapsLapsDone(index, index2)// 3. goCart
    }
  } 
} 