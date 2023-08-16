
const colors_pastel=["#FFB6C1","#FFA07A","#FF7F50","#FF6347","#FF4500","#FFD700","#FFA500","#FF8C00","#FF69B4","#FF1493","#FF00FF"];
const v_i=5;
const v_t=2.5;
const n=50;
var ii=0;
class particle{
	constructor(x,y,r,vx,vy,ax,ay){
		this.x=x;
		this.y=y;
		this.r=r;
		this.vx=vx;
		this.vy=vy;
        this.ax=0;
        this.ay=0;	
        ii++;
	}
	draw(){
		var v=sqrt(this.vx**2+this.vy**2);
		new circle(this.x,this.y,this.r,colors_pastel[ii],0.7,"red",0);
	}
	update(){
        this.vx+=this.ax;
        this.vy+=this.ay;
		this.x+=this.vx;
		this.y+=this.vy;
	}
}




elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;

/*
var particles=[];
for(i=0;i<n;i++){
	var x = random(0,w);
	var y = random(0,h);
	var r = 6;
	var vx = random(-v_i,v_i);
	var vy = random(-v_i,v_i);
	var p=new particle(x,y,r,vx,vy);
	particles.push(p);
}
*/

var p1=new particle(0,0,10,0,0);
var p2=new particle(0,0,10,0,0);

const g=10;
const R=100;
t_f=sqrt(R/g)*PI;
function y1(t){
    return R*(1-cos(sqrt(g/R)*t));
}
function x1(t){
    return w/2
}

function x2(t){
    return w/2;
}
function y2(t){
    return (g*t**2)/2;
}

var t=0;
var points=[];
function draw() {
	clearCanvas();
    var x_1=x1(t);
    var y_1=y1(t);
    points.push([x_1,y_1]);

    new circle(x_1,y_1,10,"red",0.7,"red",0);
    new polygon(points,"blue",0,"blue",1);
    if(points.length>1000){
        points.shift();
    }
    
    var x_2=x2(t);
    var y_2=y2(t);
    new circle(x_2,y_2,10,"green",0.7,"red",0);
    
    if(y_2<200){
        t+=0.01;
    }
    else{
        t=t;
    }
	requestAnimationFrame(draw);


}


function derv(x,y){
    a=1;
    dydx=(sqrt(x)/(sqrt(2*a-x)));
    return dydx;
}

// animate a ball going down a ramp

///////////////////////////////////////////////////////////////////////////////

draw();
      
         
