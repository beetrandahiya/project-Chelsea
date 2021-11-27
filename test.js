

elem = document.getElementById("container");
setCanvas(elem);

w=WIDTH;
h=HEIGHT;
t=0;


function draw() {
    clearcanvas();

    
   for(i=0;i<w;i+=10){new circle(i,h/2+60*sin(degToRad(i-t)),5,`hsl(${i/3},100%,50%)`,1);}
  
    
    requestAnimationFrame(draw);
    t++;
}

///////////////////////////////////////////////////////////////////////////////


draw();