///////////////////////////////////////////////////////////////////////////
/*
class BinaryTree {
  constructor(value) {

    this.data = value;
    this.left = null;
    this.right = null;

  }

  insert(value) {
    if (this.data) {
      //adding to the left if the value is less than the data of parent node
      if (value < this.data) {
        if (this.left) {
          this.left.insert(value)
        } else {
          this.left = new BinaryTree(value)
        }
      }
      //adding to the right node if the value is more than the data of parent node
      else if (value > this.data) {
        if (this.right) {
          this.right.insert(value)
        } else {
          this.right = new BinaryTree(value)
        }

      } else {
        this.data = value
      }
    }
  } 
}

a = new BinaryTree(100)
a.insert(20)
a.insert(121)
a.insert(35)
a.insert(10)


*/
//////////////////////////////////////////////////////////////////////////


elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;


n=300;
poss=[]
for(ix=0;ix<n;ix++){
  pos={
  x:random(0,w),
  y:random(0,h),
  vx:0,
  vy:0,
  past:[],
  };
  poss.push(pos);
};

t=0
v1=-2*PI;
v2=2*PI;
function draw() {

   clearCanvas();
 /*
   for(i=0;i<w;i+=40){
    for(j=0;j<h;j+=40){
      
      x=mapRange(pos.x,0,w,v1,v2);
    y=mapRange(pos.y,0,h,v1,v2);
    g=sin(y)   //vertical component
    f=cos(x);    //horizonatl componenet 
    th= atan(f/g);
      x1=i+5*cos(th);
      y1=j+5*sin(th);
      points=[[i,j],[x1,y1]];
      for(k=0;k<12;k++){
        y=mapRange(y1,0,h,v1,v2)
        x=mapRange(x1,0,w,v1,v2)
        g=sin(y)   //vertical component
        f=cos(x);    //horizonatl componenet 
         th= atan(f/g);
        x2=x1+5*cos(th);
        y2=y1+5*sin(th);
        points.push([x2,y2])
        x1=x2;
        y1=y2;
      }
      ic=mapRange(th,0,2*PI,280,330);
      ic=`hsla(${ic},100%,50%,0.5)`;
      new polygon(points,'none',0,ic,1,false);
      
    }
  }
  
*/
  for(i=0;i<n;i++){
    pos=poss[i]
    xp=mapRange(pos.x,0,w,v1,v2);
    yp=mapRange(pos.y,0,h,v1,v2);
    g=sin(yp);   //horizontal component
    f=cos(xp);    //vertical component 
    th= atan(f/g);
    //console.log(th)
    ic=mapRange(cos(th),-1,1,230,300);
    ic=`hsla(${ic},100%,50%,1)`;
    new point(pos.x,pos.y,ic,2,false);
    pos.x+=g;
    pos.y+=f;
    pos.past.push([pos.x,pos.y]);
    if(pos.past.length>50){
      pos.past.shift();
    }
    new polygon(pos.past,'none',0,ic,1,false);
  }

   requestAnimationFrame(draw);

}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();