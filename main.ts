namespace motorWorks {
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
}