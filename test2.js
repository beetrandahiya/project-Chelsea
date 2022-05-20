

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

  x = mousepos.x;
  y = mousepos.y;

  new circle(x, y, 20, "red",1,"#fff",0,"morph");

 
  requestAnimationFrame(draw);

}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();