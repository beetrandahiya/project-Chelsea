elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;



function draw() {

  // clearCanvas();

   // find a random point on a circle
  let angle1 = random(0, 2 * PI);
  let xpos1 = 300 + 200 * cos(angle1);
  let ypos1 = 300 + 200 * sin(angle1);

  // find another random point on the circle
  let angle2 = random(0, 2 * PI);
  let xpos2 = 300 + 200 * cos(angle2);
  let ypos2 = 300 + 200 * sin(angle2);

  new line(xpos1,ypos1,xpos2,ypos2,'#fff4');
 requestAnimationFrame(draw);
   
}



///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();