let bicho, bicho2

function preload() {
    bichoImg = loadImage('assets/img/bicho/bicho-1-transpa.png')
}

function setup() {
    new Canvas()
    bicho = new Sprite()
    bicho.img = bichoImg
    bicho.scale = 0.2
    bicho.x = window.innerWidth / 2
    bicho.y = window.innerHeight / 2

    bicho2 = new Sprite()
    bicho2.img = bichoImg
    bicho2.scale = 0.2
    bicho2.x = window.innerWidth / 3
    bicho2.y = window.innerHeight / 2
}

function draw() {
    background(210)

    if (kb.presses('left')) {
        bicho.vel.x = -4
    }

    if (kb.pressing('left')) {
        bicho.vel.x = -8
    } else if (kb.pressing('right')) {
        bicho.vel.x = 8
    } else if (kb.pressing('up')) {
        bicho.vel.y = -8
    } else if (kb.pressing('down')) {
        bicho.vel.y = 8
    } else {
        bicho.vel.y = 0
        bicho.vel.x = 0
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
