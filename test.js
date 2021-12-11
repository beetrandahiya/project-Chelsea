

elem = document.getElementById("container");
setCanvas(elem);

w=WIDTH;
h=HEIGHT;



   fetch_mouse_pos(elem,'mousemove');
   
   let x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 50;
dx=0.1;
dy=0.03;

function draw() {
   
  clearcanvas();
    

  for(i=0;i<10;i++){
     
    smokeparticle=new circle(w/2+x,y,10,'#fff',0.5);
    x=x+random(-15,15);
   
  }


   requestAnimationFrame(draw);
 
}


///////////////////////////////////////////////////////////////////////////////


draw();