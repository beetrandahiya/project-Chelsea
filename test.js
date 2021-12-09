

elem = document.getElementById("container");
setCanvas(elem);

w=WIDTH;
h=HEIGHT;
t=0;


function draw() {
    clearcanvas();

    
  /* for(i=0;i<w;i+=10){
       new circle(i,h/2+60*sin(degToRad(i-t)),5,`hsl(${i/3},100%,50%)`,1);}
  */
       new circle(100,400,5,`hsl(${t/3},100%,50%)`,1);
    new twoPointCubicBezier(100,400,200,200,400,300,400,400,`hsl(${t/3},100%,50%)`,1,'none',1);
    
    new circle(200,200,5,`hsl(${t/3},100%,50%)`,1);
    new circle(400,300,5,`hsl(${t/3},100%,50%)`,1);
    new circle(400,400,5,`hsl(${t/3},100%,50%)`,1);
    new line(100,400,200,200,'#fff',1);
    new line(400,400,400,300,'#fff',1);

    //console.log(getmousepos(elem,'onclick'));
    //console.log(elem.addEventListener('click',getmousepos(elem,'onclick')));
  
    requestAnimationFrame(draw);
    t++;
}

///////////////////////////////////////////////////////////////////////////////


draw();