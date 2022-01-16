

elem = document.getElementById("container");
setCanvas(elem);

w=WIDTH;
h=HEIGHT;



   fetch_mouse_pos(elem,'mousemove');
   
 t=0;
 loadFont("BADABB__.TTF",'badaboom');
function draw() {
 // setCursor('crosshair');
  
  //clearCanvas();
  
 // new star(w/2,h/2,200,70,4,t,'#fff',1,"#f00",1);
  //new regpolygon(w/2,h/2,200,5,t,'#fff',1,"#f00",1);
  //color=randomColorHex();
 // new text(w/2-50,h/2,"hello bitches!",50,'badaboom',400,color,2,0,"#000",1);
 
 
   let v= randomGaussian(w/2,w/8);
  // new line(v,h/2,v,v+v,'#fff',1);
   new circle(v,h/2,10,'rgba(255,0,0,0.1)',1,'#fff',0);

 // t+=0.005;
 
 requestAnimationFrame(draw);
 
}


///////////////////////////////////////////////////////////////////////////////


draw();