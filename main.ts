namespace SpriteKind {
    export const ChargingEnemy = SpriteKind.create()
    export const AttackingEnemy = SpriteKind.create()
    export const StunnedEnemy = SpriteKind.create()
}
/**
 * Game mechanic: 
 * 
 * Enemy charge attack:
 * 
 * - come within distance
 * 
 * - charge for a little while (stationary)
 * 
 * - attack! (after timer)
 * 
 * setting:
 * 
 * - october stuff
 * 
 * knowing distance:
 * 
 * - invisible hitbox sprite
 * 
 * - distance formula
 * 
 * gameplay:
 * 
 * - more dmg during charge
 * 
 * - stunned after charge
 * 
 * - time trial
 */
function enemyStun (baddie: Sprite) {
    baddie.setKind(SpriteKind.StunnedEnemy)
    baddie.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 2 2 2 2 . . 
        . . . . . . . . . 2 f f f f 2 . 
        . . . . . . . . 2 f f 1 f f f 2 
        . 2 . . . . . 2 2 f f f f 2 2 . 
        2 f 2 2 2 2 2 f f f f f f 2 . . 
        . 2 f f f f f f f f f f f 2 . . 
        . 2 f f f f f f f f f f f 2 . . 
        . . 2 f f f f f f f f f f 2 . . 
        . . . 2 f f f f f f f f 2 . . . 
        . . . 2 f f f f f f f 2 . . . . 
        . . . . 2 f f f f f 2 . . . . . 
        . . . . . 2 4 2 4 2 . . . . . . 
        . . . . . 2 4 2 4 2 . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        `)
    baddie.setVelocity(0, 0)
    timer.after(1000, function () {
        enemyChase(baddie)
    })
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ...........22222222222..........
        .........22...........22........
        .......22...............22......
        ......2...................2.....
        .....2.....................2....
        ....2.......................2...
        ...2.........................2..
        ...2.........................2..
        ..2...........................2.
        ..2...........................2.
        .2.............................2
        .2.............................2
        .2.............................2
        .2.............................2
        .2.............................2
        .2.............................2
        .2.............................2
        .2.............................2
        .2.............................2
        .2.............................2
        .2.............................2
        ..2...........................2.
        ..2...........................2.
        ...2.........................2..
        ...2.........................2..
        ....2.......................2...
        .....2.....................2....
        ......2...................2.....
        .......22...............22......
        .........22...........22........
        ...........22222222222..........
        ................................
        `, ducko, 0, 0)
    projectile.z = -1
    animation.runImageAnimation(
    projectile,
    [img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .............22222..............
        ............2444442.............
        ............2444442.............
        ............2444442.............
        ............2444442.............
        ............2444442.............
        .............22222..............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ............2222222.............
        ..........22444444422...........
        .........2444444444442..........
        .........2444444444442..........
        ........244444444444442.........
        ........244444444444442.........
        ........244444444444442.........
        ........244444444444442.........
        ........244444444444442.........
        ........244444444444442.........
        ........244444444444442.........
        .........2444444444442..........
        .........2444444444442..........
        ..........22444444422...........
        ............2222222.............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ...........222222222............
        .........2244444444422..........
        ........244444444444442.........
        .......24444444444444442........
        ......2444444444444444442.......
        ......2444444444444444442.......
        .....244444444444444444442......
        .....244444444444444444442......
        .....244444444444444444442......
        .....244444444444444444442......
        .....244444444444444444442......
        .....244444444444444444442......
        .....244444444444444444442......
        .....244444444444444444442......
        .....244444444444444444442......
        ......2444444444444444442.......
        ......2444444444444444442.......
        .......24444444444444442........
        ........244444444444442.........
        .........2244444444422..........
        ...........222222222............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ..........22222222222...........
        ........224444444444422.........
        ......2244444444444444422.......
        .....244444444444444444442......
        ....24444444444444444444442.....
        ...2444444444444444444444442....
        ...2444444444444444444444442....
        ..244444444444444444444444442...
        ..244444444444444444444444442...
        .24444444444444444444444444442..
        .24444444444444444444444444442..
        .24444444444444444444444444442..
        .24444444444444444444444444442..
        .24444444444444444444444444442..
        .24444444444444444444444444442..
        .24444444444444444444444444442..
        .24444444444444444444444444442..
        .24444444444444444444444444442..
        .24444444444444444444444444442..
        .24444444444444444444444444442..
        ..244444444444444444444444442...
        ..244444444444444444444444442...
        ...2444444444444444444444442....
        ...2444444444444444444444442....
        ....24444444444444444444442.....
        .....244444444444444444442......
        ......2244444444444444422.......
        ........224444444444422.........
        ..........22222222222...........
        ................................
        ................................
        `],
    50,
    false
    )
    projectile.lifespan = 250
    for (let value of sprites.allOfKind(SpriteKind.StunnedEnemy)) {
        if (distance(ducko, value) < 16) {
            statusbar = statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, value)
            if (statusbar) {
                statusbar.setFlag(SpriteFlag.Invisible, false)
                statusbar.value += -25
            }
        }
    }
})
function enemyChase (baddie: Sprite) {
    baddie.setKind(SpriteKind.Enemy)
    baddie.setVelocity(0, 0)
    baddie.follow(ducko, 20)
    animation.runImageAnimation(
    baddie,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f f f . 
        . . . . . . . . . . f f 1 f f f 
        f . . . . . f f f f f f f f . . 
        . f f f f f f f f f f f f . . . 
        . f f f f f f f f f f f f . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . . 4 . 4 . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f f f f . . 
        . . . . . . . . . f f 1 f f f . 
        f . . . . . f f f f f f f . . . 
        . f f f f f f f f f f f f . . . 
        . f f f f f f f f f f f f . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . . 4 . 4 . . . . . . . . 
        . . . . . 4 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
}
function enemyAttack (baddie: Sprite) {
    baddie.setKind(SpriteKind.AttackingEnemy)
    baddie.setImage(img`
        ..................
        .ff...............
        .fffffffff........
        ..fffffffffff.....
        ....fffffffff.....
        ..fffffffffff.....
        .....fffffff......
        .....ffffffffff...
        ......fffffff1ff..
        ......fffffffffff.
        ......ffffffff....
        .....ffffffff.....
        ...fffffffff......
        .ffffffffff.......
        ....ff...4.4......
        ............4.....
        ..................
        ..................
        `)
    baddie.vx = sprites.readDataNumber(baddie, "chargeX") * 10
    baddie.vy = sprites.readDataNumber(baddie, "chargeY") * 10
    timer.after(250, function () {
        enemyStun(baddie)
    })
    baddie.startEffect(effects.trail, 250)
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    status.spriteAttachedTo().destroy(effects.ashes, 500)
})
function enemyCharge (baddie: Sprite) {
    animation.stopAnimation(animation.AnimationTypes.All, baddie)
    baddie.follow(null)
    baddie.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 5 5 5 . . 
        . . . . . . . . . 5 f f f f 5 . 
        . . . . . . . . 5 f f 1 f f f 5 
        . 5 . . . . . 5 5 f f f f 5 5 . 
        5 f 5 5 5 5 5 f f f f f f 5 . . 
        . 5 f f f f f f f f f f f 5 . . 
        . 5 f f f f f f f f f f f 5 . . 
        . . 5 f f f f f f f f f f 5 . . 
        . . . 5 f f f f f f f f 5 . . . 
        . . . 5 f f f f f f f 5 . . . . 
        . . . . 5 f f f f f 5 . . . . . 
        . . . . . 5 4 5 4 5 . . . . . . 
        . . . . . 5 4 5 4 5 . . . . . . 
        . . . . . . 5 . 5 . . . . . . . 
        `)
    baddie.setKind(SpriteKind.ChargingEnemy)
    sprites.setDataNumber(baddie, "chargeX", ducko.x - baddie.x)
    sprites.setDataNumber(baddie, "chargeY", ducko.y - baddie.y)
    timer.after(500, function () {
        enemyAttack(baddie)
    })
}
// distance a and b = sqrt((a.x - b.x)^2 + (a.y - b.y)^2)
function distance (mySprite: Sprite, mySprite2: Sprite) {
    return Math.sqrt((mySprite.x - mySprite2.x) ** 2 + (mySprite.y - mySprite2.y) ** 2)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.AttackingEnemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    enemyChase(otherSprite)
})
let baddie: Sprite = null
let statusbar: StatusBarSprite = null
let projectile: Sprite = null
let ducko: Sprite = null
scene.setBackgroundColor(14)
ducko = sprites.create(img`
    . . . . . . f f f . . . . . . . 
    . . . . . f c c c f . . . . . . 
    . . . . f f d d d f f . . . . . 
    . . . f c c c c c c c f . . . . 
    . . . . f 1 1 1 1 1 f . . . . . 
    . . . . f 1 b 1 b 1 f . . . . . 
    . . . . f 3 1 1 1 3 f . . . . . 
    . . . . . f 1 1 1 f . . . . . . 
    . . . . f f f e f f . . . . . . 
    . . f f 4 c c b c c f f f . . . 
    . f e e e c c b c c e e e f . . 
    . . f f f f c b c f f f f . . . 
    . . . . . f c c c f . . . . . . 
    . . . . . . f e 4 f . . . . . . 
    . . . . . . f e f . . . . . . . 
    . . . . . . . f . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(ducko)
tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101020202020202020201010202020202020202010102020202020202020101020202020202020201010202020202020202010102020202020202020101010101010101010101`, img`
    2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen))
info.setLife(10)
game.onUpdateInterval(2000, function () {
    baddie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f f f . 
        . . . . . . . . . . f f 1 f f f 
        f . . . . . f f f f f f f f . . 
        . f f f f f f f f f f f f . . . 
        . f f f f f f f f f f f f . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . . 4 . 4 . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(baddie, myTiles.tile2)
    statusbar = statusbars.create(10, 2, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(baddie)
    statusbar.setFlag(SpriteFlag.Invisible, true)
    enemyChase(baddie)
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(100, function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (distance(ducko, value) < 24) {
            enemyCharge(value)
        }
    }
})
