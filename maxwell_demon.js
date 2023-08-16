
const v_i=5;
const v_t=2.5;
const n=50;
class particle{                      // create a particle class with position, velcoity and radius
	constructor(x,y,r,vx,vy){
		this.x=x;
		this.y=y;
		this.r=r;
		this.vx=vx;
		this.vy=vy;
		if(this.x<w/2){
		this.passed=false;           // to check if the particle has passed the membrane
		}
	}
	
	draw(){                          // draw the particle , if the velocity is less than threshold velocity, color is blue else red
		var v=sqrt(this.vx**2+this.vy**2);
		if(v<v_t){
			var c="blue";
		}
		else{
			var c="red";
		}
		new circle(this.x,this.y,this.r,c,0.6,"red",0);
	}
	update(){               // update the position of the particle by adding velocity
		this.x+=this.vx;
		this.y+=this.vy;
	}

}




elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;




var particles=[];
for(i=0;i<n;i++){                              // create n particles with random position, velocity and radius=6
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
	new line(w/2,0,w/2,h,"black",1,"black",0);

	for(i=0;i<n;i++){                                   // for each particle, draw and update the position
		particles[i].draw();
		particles[i].update();
		checkWallBounce(particles[i]);                    // check if the particle has collided with the wall
		checkMembraneBounce(particles[i]);                // check if the particle has collided with the membrane
	}
	var E=calculateEnergy();
	var El=E[0];
	var Er=E[1];
	new text(0,100,`E_l=${El}`,20,'Arial',600,"blue",0.2,"black");
	new text(0,150,`E_r=${Er}`,20,'Arial',600,"red",0.2,"black");


	
	requestAnimationFrame(draw);


}

function checkWallBounce(particle){            // if the particle has collided with the wall, change the velocity
	if(particle.x<particle.r){                // left wall
		particle.x=particle.r;
		particle.vx=-particle.vx;
	}
	if(particle.x>w-particle.r){            // right wall
		particle.x=w-particle.r;
		particle.vx=-particle.vx;
	}
	if(particle.y<particle.r){               // top wall
		particle.y=particle.r; 
		particle.vy=-particle.vy;
	}
	if(particle.y>h-particle.r){              // bottom wall
		particle.y=h-particle.r;
		particle.vy=-particle.vy;
	}
}

function checkMembraneBounce(particle){
	var v=sqrt(particle.vx**2+particle.vy**2);     // v = sqrt(vx^2+vy^2)
	
	if(abs(w/2-particle.x)<particle.r){
		if(v<v_t){
			particle.vx=-particle.vx;               // if the velocity is less than threshold velocity, bounce back
		}
		else{
			if(particle.passed==false){             // if the velocity is greater than threshold velocity, check if the particle has passed the membrane
				if(particle.vx>0){
					particle.x=w/2+particle.r;      // if the particle has passed the membrane, change the position of the particle to the other side of the membrane
				}
				else{
					particle.x=w/2-particle.r;       
				}

			particle.vx=particle.vx;              //keep the velocity same because the particle has not collided with the membrane, it has passed through the membrane
			particle.passed=true;
			}
			else{                                   // if the particle has already passed the membrane, bounce back
				particle.vx=-particle.vx;
			}
		}
	}
}

function calculateEnergy(){                // calculate the energy of the particles in the left and right side of the membrane
	var El=0;
	var l=0;
	var Er=0;
	var r=0;
	for(i=0;i<n;i++){
		if(particles[i].x<w/2){
			El+=particles[i].vx**2+particles[i].vy**2;
			l++;
		}
		else{
			Er+=particles[i].vx**2+particles[i].vy**2;
			r++;
		}
	}

	return [El/l,Er/r];
}

///////////////////////////////////////////////////////////////////////////////

draw();
      
         
