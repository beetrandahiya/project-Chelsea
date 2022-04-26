elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;



fetch_mouse_pos(elem, 'mousemove');
loadFont("BADABB__.TTF", 'badaboom');

t = 0;
i = 0;


ii = 50;
c = 1;

function eqn(x, y) {
   return (x * x) + (y * y) - t*t;
}


function draw() {

   clearCanvas();


  
   for (i = 0; i < w; i += ii) {
      for (j = 0; j < h; j += ii) {
         
         d1=eqn(i, j);
         d = [d1 ];
         d1 = eqn(i + ii, j);
         d.push(d1);
         d1 = eqn(i, j + ii);
         d.push(d1);
         d1 = eqn(i + ii, j + ii);
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
               new line(dx, j, i, dy, `hsl(${t},100%,50%)`, 2);
            } else if (activec[1] == 1) {
               dx = i + ((c-d[0])*ii)/(d[1]-d[0]);
               dy = j + ((c-d[1])*ii)/(d[3]-d[1]);
               new line(dx, j, i+ii, dy, `hsl(${t},100%,50%)`, 2);
            } else if (activec[2] == 1) {
               dx = i + ((c-d[2])*ii)/(d[3]-d[2]);
               dy = j + ((c-d[0])*ii)/(d[2]-d[0]);
               new line(i, dy, dx, j+ii, `hsl(${t},100%,50%)`, 2);
            } else if (activec[3] == 1) {
               dx = i + ((c-d[2])*ii)/(d[3]-d[2]);
               dy = j + ((c-d[1])*ii)/(d[3]-d[1]);
               new line(i+ii, dy,dx,j+ii, `hsl(${t},100%,50%)`, 2);
           
            }
         } else if (activeconvers == 2) {
            if ((activec[0] == 1 && activec[1] == 1) || (activec[2] == 1 && activec[3] == 1)) {
               dy1 = j + (c - d[0]) * ii / (d[2] - d[0]);
               dy2 = j + (c - d[1]) * ii / (d[3] - d[1]);
               new line(i, dy1, i + ii, dy2, `hsl(${t},100%,50%)`, 2);
            } else if ((activec[0] == 1 && activec[2] == 1) || (activec[1] == 1 && activec[3] == 1)) {
               dx1 = i + (c - d[0]) * ii / (d[1] - d[0]);
               dx2 = i + (c - d[2]) * ii / (d[3] - d[2]);
               new line(dx1, j, dx2, j + ii, `hsl(${t},100%,50%)`, 2);
            }
           

         }
         else if(activeconvers ==3){
            if (activec[0] == 0) {
               dx = i + (c - d[0]) * ii / (d[1] - d[0]);
               dy = j + (c - d[0]) * ii / (d[2] - d[0]);
               new line(dx, j, i, dy, `hsl(${t},100%,50%)`, 2);
            } else if (activec[1] == 0) {
               dx = i + ((c-d[0])*ii)/(d[1]-d[0]);
               dy = j + ((c-d[1])*ii)/(d[3]-d[1]);
               new line(dx, j, i+ii, dy, `hsl(${t},100%,50%)`, 2);
            } else if (activec[2] == 0) {
               dx = i + ((c-d[2])*ii)/(d[3]-d[2]);
               dy = j + ((c-d[0])*ii)/(d[2]-d[0]);
               new line(i, dy, dx, j+ii, `hsl(${t},100%,50%)`, 2);
            } else if (activec[3] == 0) {
               dx = i + ((c-d[2])*ii)/(d[3]-d[2]);
               dy = j + ((c-d[1])*ii)/(d[3]-d[1]);
               new line(i+ii, dy,dx,j+ii, `hsl(${t},100%,50%)`, 2);
           
            }         }



      }



   }

  

   t += 0.1;
 requestAnimationFrame(draw);


}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();