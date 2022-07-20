elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;
GRAVITY_X=0;
GRAVITY_Y=0;

// soft body
class massPoint{
    constructor(x,y,m){
        this.x=x;
        this.y=y;
        this.m=m;
        this.vx=0;
        this.vy=0;
        this.fx=0;
        this.fy=0;
    }
    update(){
        this.vx+=this.fx/this.m;
        this.vy+=this.fy/this.m;
        this.x+=this.vx;
        this.y+=this.vy;
    }
    draw(){
        new point(this.x,this.y,"#ffa",4);
    }
} 

class spring{
    constructor(massPoint1,massPoint2,ks,l,kd){
        this.massPoint1=massPoint1;
        this.massPoint2=massPoint2;
        this.ks=ks;
        this.l=l;
        this.kd=kd;
        this.x1=massPoint1.x;
        this.y1=massPoint1.y;
        this.x2=massPoint2.x;
        this.y2=massPoint2.y;

        this.v1x=massPoint1.vx;
        this.v1y=massPoint1.vy;
        this.v2x=massPoint2.vx;
        this.v2y=massPoint2.vy;

        this.v1=sqrt(this.v1x*this.v1x+this.v1y*this.v1y);
        this.v2=sqrt(this.v2x*this.v2x+this.v2y*this.v2y);

    }
    update(){

        this.dx=this.x2-this.x1;
        this.dy=this.y2-this.y1;
        this.d=sqrt(this.dx*this.dx+this.dy*this.dy);
        //calculate spring force and damping force
        this.fs=this.ks*(this.l-this.d);
       // this.fdx=this.kd*(this.v2x-this.v1x);
       // this.fdy=this.kd*(this.v2y-this.v1y);
        //calculate total force
        this.fx=this.fs*this.dx/this.d;
        this.fy=this.fs*this.dy/this.d;
      
      //  this.fy=this.fx*this.dy/this.d;
      //  this.fx=-this.fy*this.dx/this.d;
        //update mass point

    
        this.massPoint1.fx=this.fx+this.massPoint1.m*GRAVITY_X;
        this.massPoint1.fy=-this.fy+this.massPoint1.m*GRAVITY_Y;
        this.massPoint2.fx=this.fx+this.massPoint2.m*GRAVITY_X;
        this.massPoint2.fy=this.fy+this.massPoint2.m*GRAVITY_Y;
    }

    draw(){
        new line(this.x1,this.y1,this.x2,this.y2,"#aaa",2);
    }
}

var m1=new massPoint(100,100,1);
var m2=new massPoint(100,310,1);

function draw() {

   clearCanvas();
   var s1=new spring(m1,m2,0.01,200,0.1);

  
    m1.draw();
    m2.draw();
    s1.draw();
    s1.update();
    m1.update();
    m2.update();
   requestAnimationFrame(draw);


}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();