elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;

fetch_mouse_pos(elem, "mousemove");


//flocking

//boid
MAX_SPEED = 1;
MAX_FORCE = 0.01;
class Boid {
    constructor() {
        this.pos = createVector(random(0,w), random(0,h));
        this.vel = createVector(random(-1,1), random(-1,1));
        this.acc = createVector(0, 0);
    }
    edges(){
        if(this.pos.x>w){
            this.pos.x=0;
        }
        if(this.pos.x<0){
            this.pos.x=w;
        }
        if(this.pos.y>h){
            this.pos.y=0;
        }
        if(this.pos.y<0){
            this.pos.y=h;
        }
    
    }

    align(boids) {
        let perception = 50;
        let steer = createVector(0, 0);
        let total = 0;
        for (let other of boids) {
            if (other != this) {
                //keep the average calculation in percetion range
                let d=dist(this.pos.x,this.pos.y,other.pos.x,other.pos.y);
                if (d < perception) {
                    steer=addVec(steer,other.vel);
                    total++;
                }
            }

        }
        if(total>0){
            //steering
            steer = divideVec(steer,total);
            steer = setMagnitude(steer, MAX_SPEED);
            steer = subtractVec(steer,this.vel);
            steer = limitVec(steer,MAX_FORCE);

        }
        return steer;
    }
    cohesion(boids) {
        let perception = 50;
        let steer = createVector(0, 0);
        let total = 0;
        for (let other of boids) {
            if (other != this) {
                //keep the average calculation in percetion range
                let d=dist(this.pos.x,this.pos.y,other.pos.x,other.pos.y);
                if (d < perception) {
                    steer=addVec(steer,other.pos);
                    total++;
                }
            }
        }
        if(total>0){
            //steering
            steer = divideVec(steer,total);
            steer = subtractVec(steer,this.pos);
            steer = setMagnitude(steer, MAX_SPEED);
            steer = subtractVec(steer,this.vel);
            steer = limitVec(steer,MAX_FORCE);
        }
        return steer;
    }


    flock(boids){
        this.acc = addVec(this.acc,this.align(boids));
        this.acc = addVec(this.acc,this.cohesion(boids));
        //this.acc = addVec(this.acc,this.separation(boids));
    }
    show() {
        new circle(this.pos.x, this.pos.y, 8, "#c5a3ff", 1, "#fff", 0);
    }
    update() {
        this.vel = addVec(this.vel, this.acc);
        this.pos = addVec(this.pos, this.vel);

    }
}



//flock

flock = [];
for (i = 0; i < 30; i++) {
    flock.push(new Boid());
}

t = 1;

function draw() {

    clearCanvas();

    for (let boid of flock) {
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
    }

    requestAnimationFrame(draw);


}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();