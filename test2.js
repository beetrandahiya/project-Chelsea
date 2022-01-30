

elem = document.getElementById("container");
setCanvas(elem);

w=WIDTH;
h=HEIGHT;



   fetch_mouse_pos(elem,'mousemove');
   
t=0;
i=0;
 loadFont("BADABB__.TTF",'badaboom');
function draw() {

   clearCanvas();

   
      new line(i,100,i+20,100,'#f0f',4);
   

 t+=0.01;
 requestAnimationFrame(draw);
 
}


///////////////////////////////////////////////////////////////////////////////


draw();