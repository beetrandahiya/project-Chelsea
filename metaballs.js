

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
   r:30
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
ii=4;

function draw() {

   clearCanvas();

   
      pos.x+=vel.x;
      pos.y+=vel.y;
      pos1.x+=vel1.x;
      pos1.y+=vel1.y;

      velOnCollision(pos,vel);
      velOnCollision(pos1,vel1);
      for(i=0;i<w;i+=ii){
         for(j=0;j<h;j+=ii){
            d=1/dist(pos.x,pos.y,i,j);
            d+=1/dist(pos1.x,pos1.y,i,j);
            d=9/d;
            d=clamp(d,200,360);
            if(d<280){
         new rect(i,j,ii,ii,`hsl(${d},100%,50%)`,1,`hsl(${d},100%,50%)`,1);}}
      }
      //new circle(pos.x,pos.y,pos.r,'red',1,'#ff0',2);

      
 t+=0.01;
 requestAnimationFrame(draw);
 
}


///////////////////////////////////////////////////////////////////////////////


draw();