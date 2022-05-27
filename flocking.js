elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;

fetch_mouse_pos(elem, "mousemove");


//flocking

//boid
MAX_SPEED = 2.5;
MAX_FORCE = 0.1;
class Boid {
    constructor() {
        this.pos = createVector(random(0,w), random(0,h));
        this.vel = createVector(random(-1,1), random(-1,1));
        this.acc = createVector(0, 0);
        this.color = `hsla(${random(0,360)},100%,50%,1)`;
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

    /////////////////////////////////
    ///Alignment
    /////////////////////////////////
    align(boids) {
        let perception = 95;
        let steer = createVector(0, 0);
        let total = 0;
        for (let other of boids) {
            if (other != this) {
                //keep the average calculation in percetion range
                let d=distanceVec(this.pos,other.pos);
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

    /////////////////////////////////
    ///Cohesion
    /////////////////////////////////
    cohesion(boids) {
        let perception = 90;
        let steer = createVector(0, 0);
        let total = 0;
        for (let other of boids) {
            if (other != this) {
                //keep the average calculation in percetion range
                let d=distanceVec(this.pos,other.pos);
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

    /////////////////////////////////
    ///Separation
    /////////////////////////////////
    separation(boids) {
        let perception = 54;
        let steer = createVector(0, 0);
        let total = 0;
        for (let other of boids) {
            if (other != this) {
                //keep the average calculation in percetion range
                let d=distanceVec(this.pos,other.pos);
                if (d < perception) {
                    let diff = subtractVec(this.pos,other.pos);
                    diff = divideVec(diff,d*d);
                    steer = addVec(steer,diff);
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


    flock(boids){
        this.acc = addVec(this.acc,this.align(boids));
        this.acc = addVec(this.acc,this.cohesion(boids));
        this.acc = addVec(this.acc,this.separation(boids));
    }
    show() {
        new circle(this.pos.x, this.pos.y, 4, this.color, 1, "#fff", 0);
        /*let rot=atan(this.vel.y/this.vel.x);
        new regpolygon(this.pos.x, this.pos.y,5,3,-rot+PI/6,this.color,1,"#fff",0);*/
    }
    update() {
        this.pos = addVec(this.pos, this.vel);
        this.vel = addVec(this.vel, this.acc);
        this.vel = limitVec(this.vel, MAX_SPEED);
        this.acc = createVector(0, 0);
    }
}



//flock

flock = [];
for (i = 0; i < 100; i++) {
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