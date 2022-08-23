

elem = document.getElementById("container");
setCanvas(elem);

w=WIDTH;
h=HEIGHT;



   fetch_mouse_pos(elem,'mousemove');
   
   G=10**-3.5  ;

   class Particle {
    constructor(x,y,m,vx,vy,r) {
      this.x=x;
      this.y=y;
      this.m=m;
      this.trail=[];
      this.r=r||sqrt(m);
      var c=random(160,320);
      this.c=`hsl(${c},100%,50%)`;
      this.c_trail=`hsla(${c},100%,50%,0.5)`;
      this.v={
        x:vx,
        y:vy
      };
      this.a={
        x:0,
        y:0
      };
    }
    calculateForce(other) {
      let dx=this.x-other.x;
      let dy=this.y-other.y;
      let F_gravity = G*this.m*other.m;
      let F_x=-F_gravity*dx/sqrt(dx*dx+dy*dy);
      let F_y=-F_gravity*dy/sqrt(dx*dx+dy*dy);
      return {
        x:F_x,
        y:F_y
      };
    }
    calculateAcceleration(other) {
      let F=this.calculateForce(other);
      let a_x=F.x/this.m;
      let a_y=F.y/this.m;
      return {
        x:a_x,
        y:a_y
      };
    }
    calculateAccelerationAll(particles) {

      this.a.x = 0;
      this.a.y = 0;
      for(let i=0;i<particles.length;i++){
        let other=particles[i];
        if(other!=this){
          let a_other=this.calculateAcceleration(other);
          this.a.x+=a_other.x;
          this.a.y+=a_other.y;
        }
      }
    }
    //fuse on collision with another particle
    fuse(other) {
      let dx=this.x-other.x;
      let dy=this.y-other.y;
      let dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<this.r+other.r){
        // make new particle
        let new_m=this.m+other.m;
        let new_x=(this.m*this.x+other.m*other.x)/new_m;
        let new_y=(this.m*this.y+other.m*other.y)/new_m;
        let new_vx=(this.m*this.v.x+other.m*other.v.x)/new_m;
        let new_vy=(this.m*this.v.y+other.m*other.v.y)/new_m;
        let new_particle=new Particle(new_x,new_y,new_m,new_vx,new_vy);
        // remove old particles
        particles.splice(particles.indexOf(this),1);
        particles.splice(particles.indexOf(other),1);
        // add new particle
        particles.push(new_particle);
      }
    }
    // fuse all
    fuseAll(particles) {
      for(let i=0;i<particles.length;i++){
        let other=particles[i];
        if(other!=this){
          this.fuse(other);
        }
      }
    }
    update() {
      this.trail.push([this.x,this.y]);
      if(this.trail.length>200){
        this.trail.shift();
      }
      this.v.x+=this.a.x;
      this.v.y+=this.a.y;
      this.x+=this.v.x;
      this.y+=this.v.y;
    }
    show() {
      new circle(this.x,this.y,this.r,this.c,0.7,this.c,0);
    }
    show_trail() {
      new polygon(this.trail,this.c,0,this.c_trail,1);
    }

  }

   
   colors=['#17078B','#4F03A1','#AA2595','#C5417D','#DB5C67','#E97158','#F8973F','#FCB530','#F3EE22']
   Fabsmax=0;
   Fabsmin=0;
   t=0;

    particles=[];
    //sun
    sun=new Particle(w/2,h/2,1000,0,0,100);
    particles.push(sun);
    for(let i=0;i<1;i++){
        let x= w/2+ 300;
        let y= h/2;
        let m=1;
        let vx=0;
        let vy=9.8;
        let r=10;
        let p=new Particle(x,y,m,vx,vy,r);
        particles.push(p);
    }


function draw() {
   
  clearCanvas();
  
  for(let i=0;i<particles.length;i++){
    let p=particles[i];
    p.calculateAccelerationAll(particles);
    //p.fuseAll(particles);
    p.update();
    p.show();
    p.show_trail();
  }



 requestAnimationFrame(draw);
 
}

function Fbetween(x1,y1,x2,y2,m1,m2) {
  r=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
  F={
    x:((G*m1*m2)/(r*r*r))*(x2-x1),
    y:((G*m1*m2)/(r*r*r))*(y2-y1)
  }
  return F;
}

///////////////////////////////////////////////////////////////////////////////


draw();