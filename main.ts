input.onButtonPressed(Button.A, function () {
    Joueur.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    Balle = game.createSprite(Joueur.get(LedSpriteProperty.X), 4)
    EstTouche = false
    Balle.set(LedSpriteProperty.Brightness, 100)
    while (EstTouche == false && Balle.get(LedSpriteProperty.Y) > 0) {
        Balle.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    basic.pause(100)
    Balle.delete()
})
function SiToucheMur (sprite: game.LedSprite) {
    sprite.delete()
    EstTouche = true
    game.addScore(1)
}
input.onButtonPressed(Button.B, function () {
    Joueur.change(LedSpriteProperty.X, 1)
})
function SiToucheTir (sprite: game.LedSprite) {
    sprite.delete()
    EstTouche = true
}
let T40_touche = false
let TirT40: game.LedSprite = null
let T20_touche = false
let TirT20: game.LedSprite = null
let T00_touche = false
let TirT00: game.LedSprite = null
let EstTouche = false
let Balle: game.LedSprite = null
let Joueur: game.LedSprite = null
game.setLife(4)
let M02 = game.createSprite(0, 2)
let M12 = game.createSprite(1, 2)
let M22 = game.createSprite(2, 2)
let M32 = game.createSprite(3, 2)
let M42 = game.createSprite(4, 2)
let M01 = game.createSprite(0, 1)
let M11 = game.createSprite(1, 1)
let M21 = game.createSprite(2, 1)
let M31 = game.createSprite(3, 1)
let M41 = game.createSprite(4, 1)
let T00 = game.createSprite(0, 0)
let T20 = game.createSprite(2, 0)
let T40 = game.createSprite(4, 0)
Joueur = game.createSprite(3, 4)
Balle = game.createSprite(3, 4)
Balle.delete()
basic.forever(function () {
    if (Balle.isTouching(M01)) {
        SiToucheMur(M01)
    }
    if (Balle.isTouching(M02)) {
        SiToucheMur(M02)
    }
    if (Balle.isTouching(M11)) {
        SiToucheMur(M11)
    }
    if (Balle.isTouching(M12)) {
        SiToucheMur(M12)
    }
    if (Balle.isTouching(M21)) {
        SiToucheMur(M21)
    }
    if (Balle.isTouching(M22)) {
        SiToucheMur(M22)
    }
    if (Balle.isTouching(M31)) {
        SiToucheMur(M31)
    }
    if (Balle.isTouching(M32)) {
        SiToucheMur(M32)
    }
    if (Balle.isTouching(M41)) {
        SiToucheMur(M41)
    }
    if (Balle.isTouching(M42)) {
        SiToucheMur(M42)
    }
    if (Balle.isTouching(T00)) {
        SiToucheMur(T00)
    }
    if (Balle.isTouching(T20)) {
        SiToucheMur(T20)
    }
    if (Balle.isTouching(T40)) {
        SiToucheMur(T40)
    }
    if (Balle.isTouching(TirT00)) {
        SiToucheTir(TirT00)
        T00_touche = true
    }
    if (Balle.isTouching(TirT20)) {
        SiToucheTir(TirT20)
        T20_touche = true
    }
    if (Balle.isTouching(TirT40)) {
        SiToucheTir(TirT40)
        T40_touche = true
    }
})
basic.forever(function () {
    while (!(T00.isDeleted())) {
        TirT00 = game.createSprite(0, 0)
        TirT00.set(LedSpriteProperty.Brightness, 100)
        T00_touche = false
        while (T00_touche == false && TirT00.get(LedSpriteProperty.Y) < 4) {
            basic.pause(1000)
            TirT00.change(LedSpriteProperty.Y, 1)
        }
        basic.pause(500)
        TirT00.delete()
    }
})
basic.forever(function () {
    while (!(T20.isDeleted())) {
        TirT20 = game.createSprite(2, 0)
        TirT20.set(LedSpriteProperty.Brightness, 100)
        T20_touche = false
        while (T20_touche == false && TirT20.get(LedSpriteProperty.Y) < 4) {
            basic.pause(1000)
            TirT20.change(LedSpriteProperty.Y, 1)
        }
        basic.pause(500)
        TirT20.delete()
    }
})
basic.forever(function () {
    while (!(T40.isDeleted())) {
        TirT40 = game.createSprite(4, 0)
        TirT40.set(LedSpriteProperty.Brightness, 100)
        T40_touche = false
        while (T40_touche == false && TirT40.get(LedSpriteProperty.Y) < 4) {
            basic.pause(1000)
            TirT40.change(LedSpriteProperty.Y, 1)
        }
        basic.pause(500)
        TirT40.delete()
    }
})
basic.forever(function () {
    if (TirT00.isTouching(Joueur)) {
        game.removeLife(1)
        Joueur.set(LedSpriteProperty.Blink, 100)
        basic.pause(1000)
    }
    Joueur.set(LedSpriteProperty.Blink, 0)
})
basic.forever(function () {
    if (game.score() >= 13) {
        basic.showString("Gagné!!!")
        game.gameOver()
    }
})
