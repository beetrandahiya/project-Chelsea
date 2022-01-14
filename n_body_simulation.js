

elem = document.getElementById("container");
setCanvas(elem);

w=WIDTH;
h=HEIGHT;



   fetch_mouse_pos(elem,'mousemove');
   
   G= 100  ;
   m=0.001;
  

  n=3;

   pos=[];
   pointspos=[];
   vel=[];
   for(i=0;i<n;i++){
      pos.push({x:w/2+random(-1,1)*w/4,y:h/2+random(-1,1)*h/4});
      vel.push({x:0,y:0});
   }


   
   colors=['#17078B','#4F03A1','#AA2595','#C5417D','#DB5C67','#E97158','#F8973F','#FCB530','#F3EE22']
   
   t=0;
   
   
   Forces=[];
   oldforces=[];
   
    for(i=0;i<n;i++){
      Forces[i]={x:0,y:0};
      oldforces.push([]);
    }

function draw() {
  // console.log(Forces[0].x);
  clearCanvas();
  combs=[];
  for(i=0;i<pos.length;i++){
    for(var j=i+1;j<pos.length;j++){
        combs.push([String(i)+String(j),Fbetween(pos[i].x,pos[i].y,pos[j].x,pos[j].y,m,m)]);
    }
  }
  
  for(var i=0;i<pos.length;i++){
    
    new circle(pos[i].x,pos[i].y,10,'rgb(88,186,245)'); 
    
    for(j=0;j<combs.length;j++){
      
      if(combs[j][0].includes(String(i))){
        
        if(String(i)==combs[j][0][0]){ 
          Forces[i].x+=combs[j][1].x;
          Forces[i].y+=combs[j][1].y;
          if(t==0 || t==400){
          console.log(combs[j][0]);}
        }
        else{
          Forces[i].x-=combs[j][1].x;
          Forces[i].y-=combs[j][1].y;
          if(t==0 || t==400){
          console.log("-"+combs[j][0]);}
        }
      }
    }


    vel[i].x+=Forces[i].x/m;
    vel[i].y+=Forces[i].y/m;
    pos[i].x+=vel[i].x;
    pos[i].y+=vel[i].y;
    if(t<600){
      oldforces[i].push(Forces[i].x);
    }

  }
  for(j=0;j<n;j++){
  for(i=0;i<oldforces.length-1;i++){
    new line(i,w/2+100000*oldforces[j][i],i+1,w/2+100000*oldforces[j][i+1],'#fff');
  }
  }
  t++;
  
 // new line(x1,y1,x2,y2,'#fff');
 // new line(x1,y1,x3,y3,'#fff');
 // new line(x2,y2,x3,y3,'#fff');
  //new line(x1,y1,(x1+x2+x3)/3,(y1+y2+y3)/3,'#fff');
  //new line(x2,y2,(x1+x2+x3)/3,(y1+y2+y3)/3,'#fff');
  //new line(x3,y3,(x1+x2+x3)/3,(y1+y2+y3)/3,'#fff');

  /*
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
 */
 

  






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