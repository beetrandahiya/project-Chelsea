elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;



fetch_mouse_pos(elem, 'mousemove');

G =  6.674*10**-3.533;

class Particle {
    constructor(x, y, z, m, vx, vy, vz, r) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.m = m;
        this.trail = [];
        this.r = r || sqrt(m);
        var c = random(160, 320);
        this.c = `hsl(${c},100%,50%)`;
        this.c_trail = `hsla(${c},100%,50%,0.5)`;
        this.v = {
            x: vx,
            y: vy,
            z: vz
        };
        this.a = {
            x: 0,
            y: 0,
            z: 0
        };
    }
    calculateForce(other) {
        let dx = this.x - other.x;
        let dy = this.y - other.y;
        let dz = this.z - other.z;
        let F_gravity = G * this.m * other.m;
        let F_x = -F_gravity * dx / Math.sqrt(dx * dx + dy * dy + dz * dz);
        let F_y = -F_gravity * dy / Math.sqrt(dx * dx + dy * dy + dz * dz);
        let F_z = -F_gravity * dz / Math.sqrt(dx * dx + dy * dy + dz * dz);

        return {
            x: F_x,
            y: F_y,
            z: F_z
        };
    }
    calculateAcceleration(other) {
        let F = this.calculateForce(other);
        let a_x = F.x / this.m;
        let a_y = F.y / this.m;
        let a_z = F.z / this.m;
        return {
            x: a_x,
            y: a_y,
            z: a_z
        };
    }
    calculateAccelerationAll(particles) {

        this.a.x = 0;
        this.a.y = 0;
        this.a.z = 0;
        for (let i = 0; i < particles.length; i++) {
            let other = particles[i];
            if (other != this) {
                let a_other = this.calculateAcceleration(other);
                this.a.x += a_other.x;
                this.a.y += a_other.y;
                this.a.z += a_other.z;
            }
        }
    }
   
    update() {
        this.trail.push([this.x, this.y]);
        if (this.trail.length > 400) {
            this.trail.shift();
        }
        this.v.x += this.a.x;
        this.v.y += this.a.y;
        this.v.z += this.a.z;
        this.x += this.v.x;
        this.y += this.v.y;
        this.z += this.v.z;
    }
    show() {
        new circle(this.x, this.y, this.r, this.c, 0.7, this.c, 0);
       // console.log(this.x, this.y,this.z);
    }
    show_trail() {
        new polygon(this.trail, this.c, 0, this.c_trail, 1);
    }

}


colors = ['#17078B', '#4F03A1', '#AA2595', '#C5417D', '#DB5C67', '#E97158', '#F8973F', '#FCB530', '#F3EE22']
Fabsmax = 0;
Fabsmin = 0;
t = 0;

particles = [];

//particle 1

r0_x = 0.9700436*190 ;
r0_y = -0.24308753 *190;
r0_z =0;
v0_x = 0.466203685;
v0_y = 0.43236573;
v0_z = 0;

r1_x = -r0_x;
r1_y = -r0_y;
r1_z = -r0_z;
v1_x = v0_x;
v1_y = v0_y;
v1_z = v0_z;

r2_x = 0;
r2_y = 0;
r2_z = 0;
v2_x = -2 * v0_x;
v2_y = -2 * v0_y;
v2_z = -2 * v0_z;

m = 10;

p1 = new Particle(w / 2 + r0_x, h / 2 + r0_y, r0_z, m, v0_x, v0_y, v0_z, sqrt(m));
particles.push(p1);

p2 = new Particle(w / 2 + r1_x, h / 2 + r1_y, r1_z, m, v1_x, v1_y, v1_z, sqrt(m));
particles.push(p2);

//particle 3
p3 = new Particle(w / 2 + r2_x, h / 2 + r2_y, r2_z, m, v2_x, v2_y, v2_z, sqrt(m));
particles.push(p3);




function draw() {

    clearCanvas();

    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.calculateAccelerationAll(particles);
        //p.fuseAll(particles);
        p.update();
        p.show();
        p.show_trail();
    }



    requestAnimationFrame(draw);

}

function Fbetween(x1, y1, x2, y2, m1, m2) {
    r = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    F = {
        x: ((G * m1 * m2) / (r * r * r)) * (x2 - x1),
        y: ((G * m1 * m2) / (r * r * r)) * (y2 - y1)
    }
    return F;
}

///////////////////////////////////////////////////////////////////////////////


draw();