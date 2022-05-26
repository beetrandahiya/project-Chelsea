elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;

fetch_mouse_pos(elem, "mousemove");


//flocking

//boid
class Boid {
    constructor() {
        this.pos = createVector(w / 2, h / 2);
        this.vel = createVector(random(-1, 1), random(-1, 1));
        this.acc = createVector(0, 0);
    }

    align(boids) {
        let perception = 50;
        let avg = createVector(0, 0);
        let total = 0;
        for (let other of boids) {
            if (other != this) {
                //keep the average calculation in percetion range
                if (dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y) < perception) {
                    avg=addVec(avg,other.vel);
                    total++;
                }
            }
            avg = divideVec(avg, boids.length - 1);

        }
        if(total>0){
            
            this.acc = addVec(this.acc, avg);
        }
    }
    show() {
        new circle(this.pos.x, this.pos.y, 8, "#c5a3ff", 1, "#fff", 0);
    }
    update() {
        this.pos = addVec(this.pos, this.vel);
        this.vec = addVec(this.vel, this.acc);

    }
}



//flock

flock = [];
for (i = 0; i < 10; i++) {
    flock.push(new Boid());
}

t = 1;

function draw() {

    clearCanvas();

    for (let boid of flock) {
        boid.align(flock);
        boid.update();
        boid.show();
    }

    requestAnimationFrame(draw);


}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();