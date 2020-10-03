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
   //% block="Turn on Gass"
    let Gass = 100
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