namespace motorWorks {
    let Done = 0
    let Crashed = false
    let Lapsdone = 0
    let Speed = Math.max(0, 3)

    function mapsLaps(Map: number,Laps: number,) {
    Lapsdone = Math.max(0, Laps)
    if (Map = 1) {

    }

    if (Map = 2) {

    }

    if (Map = 3) {

    }

    game.gameOver()
    basic.forever(function () {
        if (Crashed = false) {
            if (Done != 100) {
                Done += Speed
                basic.pause(100)
            } else {
                Lapsdone = Lapsdone + 1
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
        game.addLife(3)
        let Car = game.createSprite(2, 4)
        forever(function () {
          if (Crashed = false) {
            let Speed = 1
            if (Crashed = false) {
            basic.pause(1050)
            let Speed = 2
            }
          }
        })
        
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
        mapsLaps(index, index2) //1. straightAway
    }    
    
    if (index = 2) {
        mapsLaps(index, index2) //2. Oval
    }
    
    if (index = 3) {
        mapsLaps(index, index2)// 3. goCart
    }
  } 
} 