//////////////////////////////////////////////////

elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;

fetch_mouse_pos(elem, "mousemove");

n=3;
points=[];
colors=[];
for(i=0;i<n;i++){
  points[i]= createVector(random(0,w),random(0,h));
}



// voronoi diagram
function voronoi(){
  for(i=0;i<n;i++){
    for(j=0;j<n;j++){
      if(i!=j){

        m1=(points[i].y-points[j].y)/(points[i].x-points[j].x);
        m2=-1/m1;
        x=(points[i].x+points[j].x)/2;
        y=(points[i].y+points[j].y)/2;

        x1=x-w*cos(atan(m2));
        y1=y-h*sin(atan(m2));
        x2=x+w*cos(atan(m2));
        y2=y+h*sin(atan(m2));

        new line(x1,y1,x2,y2,"#aaa",2);

            }
    }
  }
}

t=1;
function draw() {

 clearCanvas();
voronoi();

for(i=0;i<n;i++){
  new point(points[i].x,points[i].y,"#aaa",4);
}
 
  requestAnimationFrame(draw);
  

}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();