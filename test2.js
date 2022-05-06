

elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;

poss=[];
n=20;
for(i=0;i<n;i++){
  pos={
    x:random(0,w),
    y:random(0,h),
    r:random(10,20)
  }
  poss.push(pos);
}

t=0;
function draw() {

   clearCanvas();
   for(i=1;i<n;i++){
     new circle(poss[i].x,poss[i].y,poss[i].r,`hsl(${mapRange(poss[i].r,10,20,260,320)},100%,50%)`,1);
     poss[i].x+=random(-0.1,0.1);
   }
 
   requestAnimationFrame(draw);

}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();