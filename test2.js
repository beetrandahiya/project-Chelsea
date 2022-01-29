

elem = document.getElementById("container");
setCanvas(elem);

w=WIDTH;
h=HEIGHT;



   fetch_mouse_pos(elem,'mousemove');
   
t=0;
 loadFont("BADABB__.TTF",'badaboom');
function draw() {
 // setCursor('crosshair');


for(i=0;i<WIDTH;i+=5) {
   ic=clamp(i,0,1);
   y=smootherstep(0,WIDTH,i);
  
   new point(i,HEIGHT*y,'#f0f',5);
}

 t+=0.01;
 
}


///////////////////////////////////////////////////////////////////////////////


draw();