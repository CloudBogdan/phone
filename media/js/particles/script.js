
let 
    particles = [];
    mouse = new Mouse; 

for (let count = 0; count < 50; count ++) {

    particles.push(
        new Particle
    );

}

function update() {
    
    for (let prt in particles) {

        if (mouse.isRange(particles[prt], 50) && particles[prt].stoped) {

            particles[prt].vel.x += (particles[prt].x - mouse.x) / 10;
            particles[prt].vel.y += (particles[prt].y - mouse.y) / 10;
            
        }

    }
    
}
function render() {
    for (let prt in particles) particles[prt].draw();
}