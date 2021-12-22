

elem = document.getElementById("container");
setCanvas(elem);

w=WIDTH;
h=HEIGHT;



   fetch_mouse_pos(elem,'mousemove');
   
   let x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 50;


function draw() {
    clearcanvas();

    
    dx = mousepos.x - x;
    dy = mousepos.y - y;
    angle1 = Math.atan2(dy, dx);
    x = mousepos.x - cos(angle1) * segLength;
    y = mousepos.y - sin(angle1) * segLength;
  
    segment(x, y, angle1);
    new circle(x, y, 20,'red');

   requestAnimationFrame(draw);
 
}
function segment(x, y, a) {
    
     new line(x, y, x-segLength*cos(a), y-segLength*sin(a), '#fff',4);
    
   }
///////////////////////////////////////////////////////////////////////////////


draw();