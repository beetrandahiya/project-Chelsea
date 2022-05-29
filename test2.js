//////////////////////////////////////////////////

elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;

//fetch_mouse_pos(elem, "mousemove");

//make grid 

grid = [];
next_grid = [];

ii = 2;
n= w/ii;

dA = 1;
dB = 0.5;
f = 0.055;
k = 0.062;
dt=1;

points=[];

for (i = 0; i <= n; i += 1) {
  grid[i] = [];
  next_grid[i] = [];
  for (j = 0; j <= n; j += 1) {
    grid[i][j] = {
      a: 1,
      b: 0
    };
    next_grid[i][j] = {
      a: 1,
      b: 0
    };
  }
}

for(i=n/2;i<=n/2+5;i+=1){
  for(j=n/2;j<=n/2+5;j+=1){
  grid[i][j].a=0;
  grid[i][j].b=1;
  }
}

function draw() {

  clearCanvas();

  //reaction diffusion

  for (i = 1; i <= n-1; i += 1) {
    for (j = 1; j <= n-1; j += 1) {
      var a = grid[i][j].a;
      var b = grid[i][j].b;
      next_grid[i][j].a = a + (dA * laplaceA(i, j) - a * b * b + f*(1 - a)) * dt;
      next_grid[i][j].b = b + (dB * laplaceB(i, j) + a * b * b - (k + f) * b) * dt;

      next_grid[i][j].a = constrain(next_grid[i][j].a, 0, 1);
      next_grid[i][j].b = constrain(next_grid[i][j].b, 0, 1);
    
     //new point(i*ii,j*ii,`hsla(${c},100%,50%,1)`,ii/2);

    }
  }

  for(i=0;i<=n;i+=1){
    for(j=0;j<=n;j+=1){
      //figure out color

      var a = next_grid[i][j].a;
      var b = next_grid[i][j].b;
      var c = floor((a-b)*255);
      c=constrain(c,0,255);
      
     

      if(b>a){

      new rect(i*ii,j*ii,ii,ii,`rgb(${c},${c},${c})`,1,'rgb(${c},${c},${c})',2,"center");
      }
    }
  }


  swap();

  requestAnimationFrame(draw);


}

function swap() {
  temp = grid;
  grid = next_grid;
  next_grid = temp;
}


function laplaceA(i, j) {
  var sum = 0;

  sum+=grid[i-1][j-1].a * 0.05;
  sum+=grid[i-1][j].a * 0.2;
  sum+=grid[i-1][j+1].a * 0.05;

  sum+=grid[i][j-1].a * 0.2;
  sum+=grid[i][j].a * -1;
  sum+=grid[i][j+1].a * 0.2;

  sum+=grid[i+1][j-1].a * 0.05;
  sum+=grid[i+1][j].a * 0.2;
  sum+=grid[i+1][j+1].a * 0.05;

  return sum;
}

function laplaceB(i, j){
  var sum = 0;

  sum+=grid[i-1][j-1].b * 0.05;
  sum+=grid[i-1][j].b * 0.2;
  sum+=grid[i-1][j+1].b * 0.05;

  sum+=grid[i][j-1].b * 0.2;
  sum+=grid[i][j].b * -1;
  sum+=grid[i][j+1].b * 0.2;

  sum+=grid[i+1][j-1].b * 0.05;
  sum+=grid[i+1][j].b * 0.2;
  sum+=grid[i+1][j+1].b * 0.05;

  return sum;
}




///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();