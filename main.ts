namespace motorWorks {
    /**
    * Spawns Car
    */
   //% blockId=Car Spawner
   //% block="Spawn Car"
    export function spawnCar():  void {
        game.addLife(3)
        let Car = game.createSprite(2, 4)
    }
    
    /**
    * Turns on gass
    */
   //% blockId=Car Gass
   //% block="Gass on"
    export function gassOn():  void {
    let Gass = 100
    game.addLife(3)
    control.inBackground(function () {
        while (Gass != 0) {
            Gass += -1
            basic.pause(100)
        }
        if (Gass == 0) {
            game.removeLife(1)
        }
})
    }
}