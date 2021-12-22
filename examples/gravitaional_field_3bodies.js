

elem = document.getElementById("container");
setCanvas(elem);

w=WIDTH;
h=HEIGHT;



   fetch_mouse_pos(elem,'mousemove');
   
   G=10**5  ;
   m1=20;
   m2=50;
   m3=240;
  
   x1=w/2-100;
   y1=h/2;
   x2=w/2+100;
   y2=h/2;
   
   colors=['#17078B','#4F03A1','#AA2595','#C5417D','#DB5C67','#E97158','#F8973F','#FCB530','#F3EE22']
   Fabsmax=0;
   Fabsmin=0;
   t=0;

function draw() {
   
  clearcanvas();
  x3=mousepos.x;
  y3=mousepos.y;
 
  new circle(x1,y1,m1,'#C10FF0','#000000');
  new circle(x2,y2,20,'#EA4567');
  new circle(x3,y3,20,'#EA4567');
 
  for(i=0;i<w;i+=30) {
    for(j=0;j<h;j+=30) {
      x=i;
      y=j;
      r1=Math.sqrt((x-x1)*(x-x1)+(y-y1)*(y-y1));
      r2=Math.sqrt((x-x2)*(x-x2)+(y-y2)*(y-y2));
      r3=Math.sqrt((x-x3)*(x-x3)+(y-y3)*(y-y3));
      Fp1={
        x:((G*m1)/(r1*r1*r1))*(x-x1),
        y:((G*m1)/(r1*r1*r1))*(y-y1)
      }
      Fp2={
        x:((G*m2)/(r2*r2*r2))*(x-x2),
        y:((G*m2)/(r2*r2*r2))*(y-y2)
      }
      Fp3={
        x:((G*m3)/(r3*r3*r3))*(x-x3),
        y:((G*m3)/(r3*r3*r3))*(y-y3)
      }
      F={
        x:Fp1.x+Fp2.x+Fp3.x,
        y:Fp1.y+Fp2.y+Fp3.y
      }
      Fabs=Math.sqrt(F.x*F.x+F.y*F.y);
      if(abs(r1)>m1 && abs(r2)>m2 && abs(r3)>m2) {
      Fabsmax= Fabs>Fabsmax?Fabs:Fabsmax;
      Fabsmin= Fabs<Fabsmin?Fabs:Fabsmin;
        new line(x,y,x-20*F.x/Fabs,y-20*F.y/Fabs,colors[round(mapRange(Fabs,Fabsmin,Fabsmax,0,colors.length-1))],1);
     
      }
      
      
     
 
    }
  }
 

t+=100;
 requestAnimationFrame(draw);
 
}


///////////////////////////////////////////////////////////////////////////////


draw();