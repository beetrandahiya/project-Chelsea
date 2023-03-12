//////////////////////////////////////////////////

elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;

fetch_mouse_pos(elem, "mousemove");


var noise1= new noise(1);
var t=0;
var ii=10;
var c=1;

function draw() {

 clearCanvas();




for (i = 0; i < w; i += ii) {
    for (j = 0; j < h; j += ii) {
      for(liness=1.2;liness<1.9;liness+=0.3){
         var cc=mapRange(liness,1.2,4,160,320);
         drawContour(liness,`hsl(${cc},100%,50%)`);
             }
            for(liness=2.1;liness<4;liness+=0.5){
               var cc=mapRange(liness,1.2,4,160,320);
        drawContour(liness,`hsl(${cc},100%,50%)`);
            }
         
    }
 }
 t+=0.1;
 requestAnimationFrame(draw);
  

}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();

function drawContour(fac,color){

       d1=fac*noise1.perlin3d(mapRange(i,0,w,0,4),mapRange(j,0,h,0,4),1+t);
       d = [d1 ];
       d1 =fac*noise1.perlin3d(mapRange(i+ii,0,w,0,4),mapRange(j,0,h,0,4),1+t);
       d.push(d1);
       d1 = fac*noise1.perlin3d(mapRange(i,0,w,0,4),mapRange(j+ii,0,h,0,4),1+t);
       d.push(d1);
       d1 = fac*noise1.perlin3d(mapRange(i+ii,0,w,0,4),mapRange(j+ii,0,h,0,4),1+t);
       d.push(d1);
      
       activeconvers = 0;
       activec = [];
       for (k = 0; k < d.length; k++) {
          if (d[k] > 1) {
             activeconvers += 1;
             activec.push(1);
          } else {
             activec.push(0);
          }
       }
       if (activeconvers == 1) {
          if (activec[0] == 1) {
             dx = i + (c - d[0]) * ii / (d[1] - d[0]);
             dy = j + (c - d[0]) * ii / (d[2] - d[0]);
             new line(dx, j, i, dy, color, 2,"round");
          } else if (activec[1] == 1) {
             dx = i + ((c-d[0])*ii)/(d[1]-d[0]);
             dy = j + ((c-d[1])*ii)/(d[3]-d[1]);
             new line(dx, j, i+ii, dy, color, 2,"round");
          } else if (activec[2] == 1) {
             dx = i + ((c-d[2])*ii)/(d[3]-d[2]);
             dy = j + ((c-d[0])*ii)/(d[2]-d[0]);
             new line(i, dy, dx, j+ii, color, 2,"round");
          } else if (activec[3] == 1) {
             dx = i + ((c-d[2])*ii)/(d[3]-d[2]);
             dy = j + ((c-d[1])*ii)/(d[3]-d[1]);
             new line(i+ii, dy,dx,j+ii, color, 2,"round");
         
          }
       } else if (activeconvers == 2) {
          if ((activec[0] == 1 && activec[1] == 1) || (activec[2] == 1 && activec[3] == 1)) {
             dy1 = j + (c - d[0]) * ii / (d[2] - d[0]);
             dy2 = j + (c - d[1]) * ii / (d[3] - d[1]);
             new line(i, dy1, i + ii, dy2, color, 2,"round");
          } else if ((activec[0] == 1 && activec[2] == 1) || (activec[1] == 1 && activec[3] == 1)) {
             dx1 = i + (c - d[0]) * ii / (d[1] - d[0]);
             dx2 = i + (c - d[2]) * ii / (d[3] - d[2]);
             new line(dx1, j, dx2, j + ii, color, 2,"round");
          }
         

       }
       else if(activeconvers ==3){
          if (activec[0] == 0) {
             dx = i + (c - d[0]) * ii / (d[1] - d[0]);
             dy = j + (c - d[0]) * ii / (d[2] - d[0]);
             new line(dx, j, i, dy, color, 2,"round");
          } else if (activec[1] == 0) {
             dx = i + ((c-d[0])*ii)/(d[1]-d[0]);
             dy = j + ((c-d[1])*ii)/(d[3]-d[1]);
             new line(dx, j, i+ii, dy, color, 2,"round");
          } else if (activec[2] == 0) {
             dx = i + ((c-d[2])*ii)/(d[3]-d[2]);
             dy = j + ((c-d[0])*ii)/(d[2]-d[0]);
             new line(i, dy, dx, j+ii, color, 2,"round");
          } else if (activec[3] == 0) {
             dx = i + ((c-d[2])*ii)/(d[3]-d[2]);
             dy = j + ((c-d[1])*ii)/(d[3]-d[1]);
             new line(i+ii, dy,dx,j+ii, color, 2,"round");
         
          }         }

        }
