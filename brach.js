
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
var th=2/PI;

function y1(t){
    return R*(1-cos(sqrt(g/R)*t));
}
function x1(t){
    return R*(sqrt(g/R)*t-sin(sqrt(g/R)*t));
}
function x2(t){
    return g*sin(th)*cos(th)*t**2/2;
}
function y2(t){
    return g*pow(sin(th),2)*pow(t,2)/2;
}

var t1=0;
var t2=0;
var points1=[];
var points2=[];
function draw() {
	clearCanvas();
    var x_1=x1(t1);
    var y_1=y1(t1);
    points1.push([x_1,y_1]);
    new point(100*PI,200,"#44D",3);

    

    new circle(x_1,y_1,10,"red",0.7,"red",0);
    new polygon(points1,"red",0,"red",1);
    if(points1.length>1000){
        points1.shift();
    }
    if(x_1<PI*R){
        t1+=0.05;
    }
    else{
        t1=t1;
    }

    var x_2=x2(t2);
    var y_2=y2(t2);
    points2.push([x_2,y_2]);
    new circle(x_2,y_2,10,"green",0.7,"red",0);
    
    new polygon(points2,"green",0,"green",2);
    if(points2.length>1000){
        points2.shift();
    }
    if(x_2<PI*R){
        t2+=0.05;
    }
    else{
        t2=t2;
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
      
         
