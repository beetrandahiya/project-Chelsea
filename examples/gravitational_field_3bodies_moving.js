

elem = document.getElementById("container");
setCanvas(elem);

w=WIDTH;
h=HEIGHT;



   fetch_mouse_pos(elem,'mousemove');
   
   G=10**1  ;
   m1=20;
   m2=50;
   m3=100;
  
   x1=w/2-100;
   y1=h/2;
   x2=w/2+100;
   y2=h/2;
   vm1={x:0,y:1};
    vm2={x:0,y:0};
    vm3={x:0,y:0};

   
   colors=['#17078B','#4F03A1','#AA2595','#C5417D','#DB5C67','#E97158','#F8973F','#FCB530','#F3EE22']
   Fabsmax=0;
   Fabsmin=0;
   t=0;

function draw() {
   
  clearCanvas();
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

  Fm1m2=Fbetween(x1,y1,x2,y2,m1,m2);
  Fm2m3=Fbetween(x2,y2,x3,y3,m2,m3);
  Fm1m3=Fbetween(x1,y1,x3,y3,m1,m3);

  Fon1={x:Fm1m2.x+Fm1m3.x,y:Fm1m2.y+Fm1m3.y};
  Fon2={x:Fm2m3.x+Fm1m2.x,y:Fm2m3.y+Fm1m2.y};
  Fon3={x:Fm1m3.x+Fm2m3.x,y:Fm1m3.y+Fm2m3.y};

  am1={x:Fon1.x/m1,y:Fon1.y/m1};
  am2={x:Fon2.x/m2,y:Fon2.y/m2};
  am3={x:Fon3.x/m3,y:Fon3.y/m3};

  vm1.x+=am1.x;
  vm1.y+=am1.y;
  vm2.x+=am2.x;
  vm2.y+=am2.y;
  vm3.x+=am3.x;
  vm3.y+=am3.y;
  
  x1+=vm1.x;
  y1+=vm1.y;
  x2+=vm2.x;





 requestAnimationFrame(draw);
 
}

function Fbetween(x1,y1,x2,y2,m1,m2) {
  r=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
  F={
    x:((G*m1*m2)/(r*r*r))*(x2-x1),
    y:((G*m1*m2)/(r*r*r))*(y2-y1)
  }
  return F;
}
///////////////////////////////////////////////////////////////////////////////


draw();