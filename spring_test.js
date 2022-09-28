elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;
GRAVITY_X=0;
GRAVITY_Y=0.1;

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
    checkCollision(){
        if(this.x<0){
            this.x=0;
            this.vx*=-1;
        }
        if(this.x>w){
            this.x=w;
            this.vx*=-1;
        }
        if(this.y<0){
            this.y=0;
            this.vy*=-1;
        }
        if(this.y>h){
            this.y=h;
            this.vy*=-1;
        }
    }
    checkCollisionWith(other){
        let dx=this.x-other.x;
        let dy=this.y-other.y;
        let dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<this.m+other.m){
            let angle=Math.atan2(dy,dx);
            let targetAngle=angle+Math.PI;
            let targetSpeed=this.m*this.vx+other.m*other.vx;
            let targetX=this.x+Math.cos(targetAngle)*targetSpeed;
            let targetY=this.y+Math.sin(targetAngle)*targetSpeed;
            this.vx=targetX-this.x;
            this.vy=targetY-this.y;
            other.vx=targetX-other.x;
            other.vy=targetY-other.y;
        }
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
        //calculate spring force
        this.fs=this.ks*(this.l-this.d);

        //calculate total force
        this.fx=this.fs*this.dx/this.d;
        this.fy=this.fs*this.dy/this.d;
      

        //update mass point

    
        this.massPoint1.fx=this.fx+this.massPoint1.m*GRAVITY_X-this.massPoint1.vx*this.kd;
        this.massPoint1.fy=-this.fy+this.massPoint1.m*GRAVITY_Y-this.massPoint1.vy*this.kd;
        this.massPoint2.fx=this.fx+this.massPoint2.m*GRAVITY_X-this.massPoint2.vx*this.kd;
        this.massPoint2.fy=this.fy+this.massPoint2.m*GRAVITY_Y-this.massPoint2.vy*this.kd;
    }

    draw(){
        new line(this.x1,this.y1,this.x2,this.y2,"#aaa",2);
    }
}

var m1=new massPoint(100,100,1);
var m2=new massPoint(100,300,1);

// mass points group

var massPoints=[];
var springs=[];
for(var i=0;i<3;i++){
    massPoints.push(new massPoint(200,100+i*40,1));
}


function draw() {

   clearCanvas();
   var s1=new spring(m1,m2,0.01,200,0.01);
   springs=[];
   for(var i=0;i<2;i++){
    springs.push(new spring(massPoints[i],massPoints[i+1],0.5,40,0.05));
}
    for(var i=0;i<massPoints.length;i++){
        massPoints[i].update();
        massPoints[i].checkCollision();

        //check collision with other mass points
        for(var j=i+1;j<massPoints.length;j++){
            massPoints[i].checkCollisionWith(massPoints[j]);
        }
        massPoints[i].draw();
    }
    for(var i=0;i<springs.length;i++){
        springs[i].update();
        springs[i].draw();
    }

    //

    s1.update();
    m1.update();
    m2.update();
    m1.checkCollision();
    m2.checkCollision();
    m1.checkCollisionWith(m2);

    m1.draw();
    m2.draw();
    s1.draw();
    
   requestAnimationFrame(draw);


}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();