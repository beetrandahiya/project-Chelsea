elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;


t=0;

//make angular gradient



pos={
  x:w/2+100,
  y:h/2,
  vx: 3,
  vy: 2,
  r:30
}


function draw() {

  clearCanvas();

  new GaussianBlur('1 1','blur1');

  new circle(pos.x,pos.y,pos.r,'#f0f',1,'#fff',1,'blur1');

  pos.x+=pos.vx;
  pos.y+=pos.vy;

  new rect(w/2-50,h/2-50,100,100,'#f0f',1,'#fff',1);

  collision_wall(pos)

  requestAnimationFrame(draw);

}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();



function collision_wall(pos){
  if(pos.x-pos.r<0){
      pos.vx*=-1;
  }
  if(pos.x+pos.r>WIDTH){
      pos.vx*=-1;
  }
  if(pos.y-pos.r<0){
      pos.vy*=-1;
  }
  if(pos.y+pos.r>HEIGHT){
      pos.vy*=-1;
  }
} 


