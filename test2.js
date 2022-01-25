

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
  
 // new star(w/2,h/2,200,70,4,t,'#fff',1,"#f00",1);
  //new regpolygon(w/2,h/2,200,5,t,'#fff',1,"#f00",1);
  //color=randomColorHex();
 // new text(w/2-50,h/2,"hello bitches!",50,'badaboom',400,color,2,0,"#000",1);
 
 new cubicbezier([[50,50],[100,100],[150,120],[200,60],[250,120],[300,90]], "#695fe6", 0, "#44d", 2, 0.3); 

 
 requestAnimationFrame(draw);
 
}


///////////////////////////////////////////////////////////////////////////////


draw();