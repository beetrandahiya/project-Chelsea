

//////////////////////////////////////////////////

elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;

fetch_mouse_pos(elem, "mousemove");

t = PI / 2;


function draw() {

  clearCanvas();

  new Glow(10, "glow");
  new GaussianBlur(10, "blur");
  new Morph("dilate",t, "morph");
  new PointLight(100+30*cos(3*t), 100-50*sin(t), 10, "#f3f", "light");

  x = mousepos.x;
  y = mousepos.y;

  new circle(x, y, 20, "#fff",1,"#fff",0);
  new circle(100, 100, 40, "red",1,"#f00",1,"light");

 t+=0.03;
  requestAnimationFrame(draw);

}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();