class Ball {
    constructor(x,y,r) {
        this.r = r
        this.body = Bodies.circle(x,y,this.r)
        World.add(world,this.body)
    }

    show() {
        var position = this.body.position
        push()
        ellipseMode(RADIUS)
        fill(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)))
        ellipse(position.x,position.y,this.r)
        pop()
    }
}