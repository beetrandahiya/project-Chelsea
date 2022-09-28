//////////////////////////////////////////////////

elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;

fetch_mouse_pos(elem, "mousemove");


var noise1= new noise(229);
var t=0;
var ii=20;
function draw() {

 clearCanvas();


for(i=0;i<w;i+=ii){
  for(j=0;j<h;j+=ii){
   //noise 
    var n=noise1.perlin3d(mapRange(i+t,0,w,0,5),mapRange(j+t,0,h,0,5),1+t);

    var c = `rgb(${n*255},${n*255},${n*255})`;
    new rect(i,j,ii,ii,c,1,c,0,);
  }
}
t+=0.01;
  requestAnimationFrame(draw);
  

}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();