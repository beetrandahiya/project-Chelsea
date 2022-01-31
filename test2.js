

elem = document.getElementById("container");
setCanvas(elem);

w=WIDTH;
h=HEIGHT;



   fetch_mouse_pos(elem,'mousemove');
   loadFont("BADABB__.TTF",'badaboom');

t=0;
i=0;
pos={
   x:40,
   y:40,
   r:30
}
pos1={
   x:120,
   y:150,
   r:60
}
vel={
   x:random(4,5),
   y:random(1,4)
}
vel1={
   x:random(4,5),
   y:random(1,4)
}


function checkCollision(pos){
   if(pos.x>w || pos.x<0 || pos.y>h || pos.y<0){
      return true;
   }
   return false;
}
function velOnCollision(pos,vel){

      if(pos.x+pos.r>w || pos.x-pos.r<0){
         vel.x*=-1
      }
      if(pos.y+pos.r>h || pos.y-pos.r<0){
         vel.y*=-1;
      }
   
}
ii=5;
c=1;



function draw() {

   clearCanvas();
   points1=[];
   points2=[];
   
      pos.x+=vel.x;
      pos.y+=vel.y;
      pos1.x+=vel1.x;
      pos1.y+=vel1.y;

      velOnCollision(pos,vel);
      velOnCollision(pos1,vel1);
      for(i=0;i<w;i+=ii){
         for(j=0;j<h;j+=ii){
            d1=pos.r/dist(pos.x,pos.y,i,j);
            d2=pos1.r/dist(pos1.x,pos1.y,i,j);
            d=[d1+d2];
            d1=pos.r/dist(pos.x,pos.y,i+ii,j);
            d2=pos1.r/dist(pos1.x,pos1.y,i+ii,j);
            d.push(d1+d2);
            d1=pos.r/dist(pos.x,pos.y,i,j+ii);
            d2=pos1.r/dist(pos1.x,pos1.y,i,j+ii);
            d.push(d1+d2);
            d1=pos.r/dist(pos.x,pos.y,i+ii,j+ii);
            d2=pos1.r/dist(pos1.x,pos1.y,i+ii,j+ii);
            d.push(d1+d2);
            if(d[0]<c){
               if(d[1]>c){
                  px=i+(1-d[0])*ii/(d[1]-d[0]);
                  points1.push([px,j]);
               }
               if(d[2]>c){
                  px=i+(1-d[0])*ii/(d[2]-d[0]);
                  points1.push([px,j+ii]);
               }
               if(d[3]>c){
                  px=i+(1-d[0])*ii/(d[3]-d[0]);
                  points1.push([px,j+ii]);
               }
              
            }
            if(d[1]<c){
               if(d[0]>c){
                  px=i+(1-d[1])*ii/(d[0]-d[1]);
                  points2.push([px,j]);
               }
               if(d[2]>c){
                  px=i+(1-d[1])*ii/(d[2]-d[1]);
                  points2.push([px,j+ii]);
               }
               if(d[3]>c){
                  px=i+(1-d[1])*ii/(d[3]-d[1]);
                  points2.push([px,j+ii]);
               }
            }

            



         }}
         new polygon(points1,'#fff',0,'blue',1);
         //new polygon(points2,'#fff',0,'red',1);
      
      //new circle(pos.x,pos.y,pos.r,'red',1,'#ff0',2);

      
 t+=0.01;
 requestAnimationFrame(draw);
 

      }

///////////////////////////////////////////////////////////////////////////////


draw();