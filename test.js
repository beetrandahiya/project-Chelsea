

elem = document.getElementById("container");
setCanvas(elem);

w=WIDTH;
h=HEIGHT;
t=0;


   fetch_mouse_pos(elem,'click');
   


function draw() {
    clearcanvas();

    
 
     new circle(100,400,5,`hsl(${t/3},100%,50%)`,1);
    
    new circle(200,200,5,`hsl(${t/3},100%,50%)`,1);
    new circle(mousepos.x,mousepos.y,5,`hsl(${t/3},100%,50%)`,1);
    new circle(400,400,5,`hsl(${t/3},100%,50%)`,1);
    new line(100,400,200,200,'#fff',1);
    new line(400,400,mousepos.x,mousepos.y,'#fff',1);

    
     new twoPointCubicBezier(100,400,200,200,mousepos.x,mousepos.y,400,400,`hsl(${t/3},100%,50%)`,1,'none',0);
    //console.log(getmousepos(elem,'onclick'));
    //console.log(elem.addEventListener('click',getmousepos(elem,'onclick')));
  
    requestAnimationFrame(draw);
    t++;
}

///////////////////////////////////////////////////////////////////////////////


draw();