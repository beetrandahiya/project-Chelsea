elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;


t = 0;

var arr = [];
for (i = 0; i < 50; i++) {
  arr[i] = [];
  for (j = 0; j < 50; j++) {
    arr[i][j] = randomBool();
  }
}

function draw() {

  clearCanvas();

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j]) {
        new rect(i * 10, j * 10, 10, 10, '#f0f', 1, '#000', 0);
        arr[i][j]=conway_outcome(arr,i,j);
      }
    }
  }



  requestAnimationFrame(draw);

}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();

function conway_outcome(space,cx,cy) {

  n=0; //no. of neighboring cells alive

  if(cx==0 && cy==0){
    n=space[cx][cy+1]+space[cx+1][cy]+space[cx+1][cy+1];
  }
  else if(cx==0 && cy==49){
    n=space[cx][cy-1]+space[cx+1][cy-1]+space[cx+1][cy];
  }
  else if(cx==49 && cy==0){
    n=space[cx-1][cy]+space[cx-1][cy+1]+space[cx][cy+1];
  }
  else if(cx==49 && cy==49){
    n=space[cx-1][cy]+space[cx-1][cy-1]+space[cx][cy-1];
  }
  else if(cx==0){
    n=space[cx][cy-1]+space[cx][cy+1]+space[cx+1][cy-1]+space[cx+1][cy]+space[cx+1][cy+1];
  }
  else if(cy==0){
    n=space[cx-1][cy]+space[cx-1][cy+1]+space[cx][cy+1]+space[cx+1][cy]+space[cx+1][cy+1];
  }
  else if(cx==49){
    n=space[cx][cy-1]+space[cx][cy+1]+space[cx-1][cy-1]+space[cx-1][cy]+space[cx-1][cy+1];
  }
  else if(cy==49){
    n=space[cx-1][cy]+space[cx-1][cy-1]+space[cx][cy-1]+space[cx+1][cy]+space[cx+1][cy-1];
  }
  else{

  n= space[cx-1][cy-1]+space[cx][cy-1]+space[cx+1][cy-1]+space[cx-1][cy]+space[cx+1][cy]+space[cx-1][cy+1]+space[cx][cy+1]+space[cx+1][cy+1];
  }
//  console.log(n);
  if(space[cx][cy]==1) {
    if(n<2) return 0;
    if(n>3) return 0;
    return 1;
  }
  else {
    if(n==3) return 1;
    return 0;
  }


}

/*
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


*/