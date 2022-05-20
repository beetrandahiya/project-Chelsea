
//ray casting

//boundary

class Boundary{
  constructor(x1,y1,x2,y2){
    this.a=createVector(x1,y1);
    this.b=createVector(x2,y2);
  }

  show(){
    new line(this.a.x,this.a.y,this.b.x,this.b.y,"#f8f",5);
  }
}


//ray
class Ray{
  constructor(x,y,angle){
    this.pos=createVector(x,y);
    this.angle=angle;
  }
  cast(boundary){
    var x1=boundary.a.x;
    var y1=boundary.a.y;
    var x2=boundary.b.x;
    var y2=boundary.b.y;

    var x3=this.pos.x;
    var y3=this.pos.y;
    var x4=this.pos.x+cos(this.angle)*100;
    var y4=this.pos.y-sin(this.angle)*100;

    var den=(x1-x2)*(y3-y4)-(y1-y2)*(x3-x4);
    if(den==0) return false;

    var t=((x1-x3)*(y3-y4)-(y1-y3)*(x3-x4))/den;
    var u=((x1-x2)*(y1-y3)-(y1-y2)*(x1-x3))/den;

    if(t>0 && t<1 && u>0){
      var pt=createVector(x1+t*(x2-x1),y1+t*(y2-y1));
      return pt;
   }
    else{
      return false;
    }
    
  }
  show(points){
    this.points=points;

    var vec1=this.cast(b);
    var vec2=this.cast(c);
    if(vec1 && vec2){
      if(magnitude(subtractVec(this.pos,vec1))>magnitude(subtractVec(this.pos,vec2))){
        this.points.push([vec2.x,vec2.y]);
      }
      else{
        this.points.push([vec1.x,vec1.y]);
      }


    }    
    else if(vec2){
      this.points.push([vec2.x,vec2.y]);
    }
    else if(vec1){
      this.points.push([vec1.x,vec1.y]);
    
   }
   
  
  else{
     this.points.push([this.pos.x-cos(this.angle)*600,this.pos.y+sin(this.angle)*600]);
  }

  }
}


//////////////////////////////////////////////////

elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;

fetch_mouse_pos(elem,"mousemove");

t=PI/2;
function draw() {

   clearCanvas();

   new Glow(2,"glow");

   x=mousepos.x;
    y=mousepos.y;
   b= new Boundary(300,100,400,200);
   b.show();
   c= new Boundary(200,200,400,300);
    c.show();
    points=[];
   for(i=0;i<=2*PI;i+=PI/500){
   r= new Ray(x,y,i);
   r.show(points);
   }
   new polygon(points,"#fff7",1,"#aaa",1,true);
   requestAnimationFrame(draw);

}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();

