

elem = document.getElementById("container");
setCanvas(elem);

w=WIDTH;
h=HEIGHT;



   fetch_mouse_pos(elem,'mousemove');
   
   G=10**1  ;
   m1=20;
   m2=20;
   m3=20;
  
   x1=w/2-100;
   y1=150;

   x2=w/2+100;
   y2=150;
   
   x3=w/2;
   y3=273.2+50;
 
v=1;
   vm1={
    x: -v/2,
    y: v*Math.sqrt(3)/2
};
    vm2={
    x: -v/2,
    y: -v*Math.sqrt(3)/2
};
    vm3={
      x: v,
      y: 0
  };

   
   colors=['#17078B','#4F03A1','#AA2595','#C5417D','#DB5C67','#E97158','#F8973F','#FCB530','#F3EE22']
   Fabsmax=0;
   Fabsmin=0;
   t=0;
   points1=[];
    points2=[];
    points3=[];

function draw() {
   
  clearCanvas();
  
  new circle(x1,y1,10,'#C10FF0','#000000');
  new circle(x2,y2,10,'#EA4567');
  new circle(x3,y3,10,'#F7BFCD');
  points1.push({x:x1,y:y1});
  points2.push({x:x2,y:y2});
  points3.push({x:x3,y:y3});
 
  if(points1.length>200)
  {
    points1.shift();
    points2.shift();
    points3.shift();
  }
  for(i=0;i<points1.length;i++){
    new circle(points1[i].x,points1[i].y,1,'#C10FF0');
    new circle(points2[i].x,points2[i].y,1,'#EA4567');
    new circle(points3[i].x,points3[i].y,1,'#F7BFCD');
  }
 
 

  Fm1m2=Fbetween(x1,y1,x2,y2,m1,m2);
  Fm2m3=Fbetween(x2,y2,x3,y3,m2,m3);
  Fm1m3=Fbetween(x1,y1,x3,y3,m1,m3);

  Fon1={x:Fm1m2.x+Fm1m3.x,y:Fm1m2.y+Fm1m3.y};
  Fon2={x:Fm2m3.x-Fm1m2.x,y:Fm2m3.y-Fm1m2.y};
  Fon3={x:-Fm1m3.x-Fm2m3.x,y:-Fm1m3.y-Fm2m3.y};

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
  y2+=vm2.y;
  x3+=vm3.x;
  y3+=vm3.y;






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