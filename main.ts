tiles.setCurrentTilemap(tilemap`arena`)
let mySprite = sprites.create(img`
    ........................
    ........................
    .........eeeee..........
    .......eeeeeeee.........
    ......fff3ffeeee........
    .......3333333ee........
    ........ff33333e........
    .........333333e........
    .....fffffffffff........
    ....fffffffffffff.......
    ....ffffffffffffff......
    ....ffffffffffffff......
    ....ffffffffffffff......
    ....ffffffffffffff......
    ....ffffffffffffff......
    ......ffffffffff........
    .......ffffffff.........
    .......ffffffff.........
    .......ffffffff.........
    .......ffffffff.........
    .......fff..fff.........
    .......ff2..ff2.........
    ......2112.2112.........
    ......2222.2222.........
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
