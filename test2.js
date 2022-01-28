

elem = document.getElementById("container");
setCanvas(elem);

w=WIDTH;
h=HEIGHT;



   fetch_mouse_pos(elem,'mousemove');
   
t=0;
 loadFont("BADABB__.TTF",'badaboom');
function draw() {
 // setCursor('crosshair');
 clearCanvas();

  ar=new arc(WIDTH/2,HEIGHT/2,200,200,PI/4,0,'pie','#ff0000',1,'#ff0000',1);
 
  ar.rotate(t);
 requestAnimationFrame(draw);
 t+=0.01;
 
}


///////////////////////////////////////////////////////////////////////////////


draw();