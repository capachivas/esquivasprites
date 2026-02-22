input.onButtonPressed(Button.A, function () {
    if (jugador.get(LedSpriteProperty.X) > 0) {
        jugador.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(vidas)
})
input.onButtonPressed(Button.B, function () {
    if (jugador.get(LedSpriteProperty.X) < 4) {
        jugador.change(LedSpriteProperty.X, 1)
    }
})
let jugador: game.LedSprite = null
let vidas = 0
basic.clearScreen()
vidas = 3
jugador = game.createSprite(2, 4)
let enemigo = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    if (enemigo.get(LedSpriteProperty.Y) == 4) {
        enemigo.set(LedSpriteProperty.Y, 0)
        enemigo.set(LedSpriteProperty.X, randint(0, 4))
    }
    basic.pause(200)
    enemigo.change(LedSpriteProperty.Y, 1)
    if (enemigo.isTouching(jugador)) {
        vidas += -1
        basic.showNumber(vidas)
        enemigo.set(LedSpriteProperty.Y, 0)
        enemigo.set(LedSpriteProperty.X, randint(0, 4))
    }
    if (vidas == 0) {
        basic.showString("FIN")
        game.gameOver()
    }
})
