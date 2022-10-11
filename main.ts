input.onButtonPressed(Button.A, function () {
    plr1.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    plr1.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        plr2.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (plr2.isTouchingEdge()) {
        plr2.delete()
    }
    plr2 = game.createSprite(randint(0, 4), 0)
})
let plr2: game.LedSprite = null
let plr1: game.LedSprite = null
plr1 = game.createSprite(2, 4)
plr2 = game.createSprite(randint(0, 4), 0)
