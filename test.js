

elem = document.getElementById("container");
setCanvas(elem);

w=WIDTH;
h=HEIGHT;



   fetch_mouse_pos(elem,'ondragstart');
   
   let x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 50;


function draw() {
   
     new circle(mousepos.x,mousepos.y,10,'#fff',1,'#000',1);

   requestAnimationFrame(draw);
 
}
function segment(x, y, a) {
    
     new line(x, y, x-segLength*cos(a), y-segLength*sin(a), '#fff',4);
    
   }
///////////////////////////////////////////////////////////////////////////////


draw();