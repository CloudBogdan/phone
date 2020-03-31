class Particle {
    constructor() {

        this.x = 0;
        this.y = random(40, scrn.height - 40);
        this.vel = {
            x: 0,
            y: 0
        };
        this.start = {
            x: random(40, scrn.width - 800),
            y: random(40, scrn.height - 40)
        };

        this.stoped = false;

    }

    draw() {
        ctx.fillStyle = "rgba(0, 0, 0, .2)";
        ctx.save();
        ctx.translate(this.x + 13, this.y + 13);
        ctx.rotate((this.x + this.y) / 100);
        ctx.translate(-(this.x + 13), -(this.y + 13));
        
        ctx.fillRect(this.x, this.y, 26, 26);
        
        ctx.restore();
        
        this.x += (this.start.x - this.x) / 50;
        this.y += (this.start.y - this.y) / 50;

        if (
            round(this.x) === round(this.start.x) &&
            round(this.y) === round(this.start.y)
            )
            this.stoped = true;

        // Move
        this.vel.x *= .9;
        this.vel.y *= .9;
        this.x += this.vel.x;
        this.y += this.vel.y;
    }
}