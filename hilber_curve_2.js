

//////////////////////////////////////////////////

elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;

fetch_mouse_pos(elem, "mousemove");


//////////////////////////////////////////////////
// Hilbert curve

order=5;
N= 2**order;
total= N * N;

// first order hilbert curve

function hilbert(i){
  points=[
    createVector(0,0),
    createVector(0,1),
    createVector(1,1),
    createVector(1,0),
  ];

  index=i & 3;

  v = points[index]; 

  for(j=1;j<order;j++){

  i=i>>>2;
  index=i & 3;

  l = 2**j;
  if(index==0){
    //do nothing
    temp=v.x;
    v.x=v.y;
    v.y=temp;
  }
  else if(index ==1){ 
    v.y+=l;
  }
  else if(index ==2){
    v.x+=l;
    v.y+=l;
  }
  else if(index ==3){
    temp= l- 1 - v.x;
    v.x= l-1 - v.y;
    v.y= temp;
    v.x+=l;
  }
}
  return v;
  
}

//make array
hilbert_points=[];
hilbert_points_array=[];
len = w/N;
for(i=0; i<total; i++){
  hilbert_points.push(multiplyVec(hilbert(i), len)); 

  hilbert_points_array.push([hilbert_points[i].x+len/2 , hilbert_points[i].y+len/2]);
}




t=1;
function draw() {

  clearCanvas();

  for(i=0; i<t-1; i++){
    c = lerpHex("#8fa1f7", "#691796",i/t);
    new line(hilbert_points_array[i][0],hilbert_points_array[i][1],hilbert_points_array[i+1][0],hilbert_points_array[i+1][1],c,10,"round");
  }
  if(t<total){
   t+=1;
   requestAnimationFrame(draw);
  }

}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();