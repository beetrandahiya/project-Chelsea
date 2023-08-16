
const v_i=5;
const v_t=2.5;
const n=50;
class particle{
	constructor(x,y,r,vx,vy){
		this.x=x;
		this.y=y;
		this.r=r;
		this.vx=vx;
		this.vy=vy;
		if(this.x<w/2){
		this.passed=false;
		}
	}
	
	draw(){
		var v=sqrt(this.vx**2+this.vy**2);
		if(v<v_t){
			var c="blue";
		}
		else{
			var c="red";
		}
		new circle(this.x,this.y,this.r,c,0.6,"red",0);
	}
	update(){
		this.x+=this.vx;
		this.y+=this.vy;
	}

}

class wedge{
    constructor(x,y,w,h,theta){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.theta=theta;
        this.points=[[x,y],[x+w,y+h],[x,y+h]];
    }
    draw(){
        new polygon(this.points,"#000",0.5,"black",2,true);
    }
}



elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;



var world=[];
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
function draw() {
	clearCanvas();

	/*for(i=0;i<n;i++){
		particles[i].draw();
		particles[i].update();
		checkWallBounce(particles[i]);
	}
*/
    var w1=new wedge(10,10,200,200,0);
    w1.draw();
	
	requestAnimationFrame(draw);


}

function checkWallBounce(particle){
	if(particle.x<particle.r){
		particle.x=particle.r;
		particle.vx=-particle.vx;
	}
	if(particle.x>w-particle.r){
		particle.x=w-particle.r;
		particle.vx=-particle.vx;
	}
	if(particle.y<particle.r){
		particle.y=particle.r;
		particle.vy=-particle.vy;
	}
	if(particle.y>h-particle.r){
		particle.y=h-particle.r;
		particle.vy=-particle.vy;
	}
}



///////////////////////////////////////////////////////////////////////////////

draw();
      
         
