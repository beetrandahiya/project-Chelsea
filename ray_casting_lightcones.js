//ray casting

//boundary

class Boundary {
    constructor(x1, y1, x2, y2) {
      this.a = createVector(x1, y1);
      this.b = createVector(x2, y2);
    }
  
    show() {
      new line(this.a.x, this.a.y, this.b.x, this.b.y, "#f8f", 5);
    }
  }
  
  
  //ray
  class Ray {
    constructor(x, y, angle) {
      this.pos = createVector(x, y);
      this.angle = angle;
    }
    cast(boundary) {
      var x1 = boundary.a.x;
      var y1 = boundary.a.y;
      var x2 = boundary.b.x;
      var y2 = boundary.b.y;
  
      var x3 = this.pos.x;
      var y3 = this.pos.y;
      var x4 = this.pos.x + cos(this.angle) * 100;
      var y4 = this.pos.y - sin(this.angle) * 100;
  
      var den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
      if (den == 0) return false;
  
      var t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
      var u = ((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
  
      if (t > 0 && t < 1 && u > 0) {
        var pt = createVector(x1 + t * (x2 - x1), y1 + t * (y2 - y1));
        return pt;
      } else {
        return false;
      }
  
    }
    show(points,boundaries) {
      this.points = points;
      this.boundaries = boundaries;
      var vecs=[];
      for(var i = 0; i < this.boundaries.length; i++){
        var vec1 = this.cast(this.boundaries[i]);
        if(vec1){
        vecs.push(vec1);
        }
      }
      //checking if false or not
      if(vecs==false){
        this.points.push([this.pos.x- cos(this.angle)*1000,this.pos.y+sin(this.angle)*1000]);
      }
      else{
        //check the nearest wall
        var nearest = vecs[0];
        //sort vecs according to magnitude
        var pos=this.pos;
        vecs.sort(function(a,b){
          return magnitude(subtractVec(pos, a))-magnitude(subtractVec(pos, b));
        });
        nearest = vecs[0];
        this.points.push([nearest.x,nearest.y]);
      }
  
    }
  }
  
  
  //////////////////////////////////////////////////
  
  elem = document.getElementById("container");
  setCanvas(elem);
  
  w = WIDTH;
  h = HEIGHT;
  
  fetch_mouse_pos(elem, "mousemove");
  
  t = PI / 2;
  
  
  b = new Boundary(300, 100, 400, 200);
  c = new Boundary(200, 200, 400, 300);
  d = new Boundary(100, 200, 100, 300);
  e = new Boundary(200, 200, 200, 300);
  f= new Boundary(100,400,300,400);
  boundaries = [b,c,d,e,f];
  function draw() {
  
    clearCanvas();
  
    new Glow(10, "glow");
  
    x = mousepos.x;
    y = mousepos.y;
  
    //making boundaries
    for(var i=0;i<boundaries.length;i++){
      boundaries[i].show();
    }
  
    //making light cone
    points = [];
    for (i = 0; i <= 2 * PI; i += PI / 500) {
      r = new Ray(x, y, i);
      r.show(points,boundaries);
    }
  
    //draw light cone
    new polygon(points, "#fff7", 1, "#aaa", 1, true,"glow");
  
    requestAnimationFrame(draw);
  
  }
  
  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  
  draw();