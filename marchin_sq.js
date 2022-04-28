elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;



fetch_mouse_pos(elem, 'mousemove');
loadFont("BADABB__.TTF", 'badaboom');

t = 0;
i = 0;


ii = 1;
c = 1;

function eqn(x, y) {
   x=x-w/2;
   y=y-h/2;
   x=x/20;
   y=-y/20;

   return y*cos(y+x+x**2+t)-x**3;
   //return 2*((x**2) + (y**2))**2 - 15*((x**2)-(y**2));
   //return sin(sin(x)+cos(y))-cos(sin(x*y)+cos(x))+cos(t);
  /*
  thumping heart

   thump=cos(1.5*t/5)*sin(6*t/5)+1.5;
   return x**2 +(-y-sqrt(abs(x)))**2-2*thump;
   */

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
               new line(dx, j, i, dy, `hsl(${t},100%,50%)`, 1,"round");
            } else if (activec[1] == 1) {
               dx = i + ((c-d[0])*ii)/(d[1]-d[0]);
               dy = j + ((c-d[1])*ii)/(d[3]-d[1]);
               new line(dx, j, i+ii, dy, `hsl(${t},100%,50%)`, 1,"round");
            } else if (activec[2] == 1) {
               dx = i + ((c-d[2])*ii)/(d[3]-d[2]);
               dy = j + ((c-d[0])*ii)/(d[2]-d[0]);
               new line(i, dy, dx, j+ii, `hsl(${t},100%,50%)`, 1,"round");
            } else if (activec[3] == 1) {
               dx = i + ((c-d[2])*ii)/(d[3]-d[2]);
               dy = j + ((c-d[1])*ii)/(d[3]-d[1]);
               new line(i+ii, dy,dx,j+ii, `hsl(${t},100%,50%)`, 1,"round");
           
            }
         } else if (activeconvers == 2) {
            if ((activec[0] == 1 && activec[1] == 1) || (activec[2] == 1 && activec[3] == 1)) {
               dy1 = j + (c - d[0]) * ii / (d[2] - d[0]);
               dy2 = j + (c - d[1]) * ii / (d[3] - d[1]);
               new line(i, dy1, i + ii, dy2, `hsl(${t},100%,50%)`, 1,"round");
            } else if ((activec[0] == 1 && activec[2] == 1) || (activec[1] == 1 && activec[3] == 1)) {
               dx1 = i + (c - d[0]) * ii / (d[1] - d[0]);
               dx2 = i + (c - d[2]) * ii / (d[3] - d[2]);
               new line(dx1, j, dx2, j + ii, `hsl(${t},100%,50%)`, 1,"round");
            }
           

         }
         else if(activeconvers ==3){
            if (activec[0] == 0) {
               dx = i + (c - d[0]) * ii / (d[1] - d[0]);
               dy = j + (c - d[0]) * ii / (d[2] - d[0]);
               new line(dx, j, i, dy, `hsl(${t},100%,50%)`, 1,"round");
            } else if (activec[1] == 0) {
               dx = i + ((c-d[0])*ii)/(d[1]-d[0]);
               dy = j + ((c-d[1])*ii)/(d[3]-d[1]);
               new line(dx, j, i+ii, dy, `hsl(${t},100%,50%)`, 1,"round");
            } else if (activec[2] == 0) {
               dx = i + ((c-d[2])*ii)/(d[3]-d[2]);
               dy = j + ((c-d[0])*ii)/(d[2]-d[0]);
               new line(i, dy, dx, j+ii, `hsl(${t},100%,50%)`, 1,"round");
            } else if (activec[3] == 0) {
               dx = i + ((c-d[2])*ii)/(d[3]-d[2]);
               dy = j + ((c-d[1])*ii)/(d[3]-d[1]);
               new line(i+ii, dy,dx,j+ii, `hsl(${t},100%,50%)`, 1,"round");
           
            }         }



      }



   }

  

   t -= 0.1;
 //requestAnimationFrame(draw);


}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();