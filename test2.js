

elem = document.getElementById("container");
setCanvas(elem);

w=WIDTH;
h=HEIGHT;



   fetch_mouse_pos(elem,'mousemove');
   

 loadFont("BADABB__.TTF",'badaboom');
function draw() {
 // setCursor('crosshair');
  
  clearCanvas();

  for(i=0;i<1;i+=0.02) {
    x=mapRange(i,0,1,0,WIDTH);
    c=cosrp(0,HEIGHT,i);
    new point(x,HEIGHT-c,'red',4);
  }
 
 requestAnimationFrame(draw);
 
}


///////////////////////////////////////////////////////////////////////////////


draw();