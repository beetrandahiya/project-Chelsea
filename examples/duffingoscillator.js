
t = 0;

///////////////////////////////////////////////////////////////////////////////


w=svg.clientWidth;
h=svg.clientHeight;


x=0.1;
y=0.1;
z=0.1;
a=10;
b=28;
c=8/3;
d=0.3;
let points = [];

function draw() {
    clearcanvas();

    //lorentz
    dt=0.01;
    dx= (a*(y-x))*dt;
  dy= (x*(b-z)-y)*dt;
  dz= (x*y - c*z)*dt;
  
  x+=dx;
  y+=dy;
  z+=dz;
    //t+=dt;
    points.push([w/2+5*(x),h/2-5*(z)]);
    new polygon(points,"#f44",2,"none",0,false);
    


    


    
    requestAnimationFrame(draw);
    
}

///////////////////////////////////////////////////////////////////////////////


draw();