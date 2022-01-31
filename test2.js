elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;



fetch_mouse_pos(elem, 'mousemove');
loadFont("BADABB__.TTF", 'badaboom');

t = 0;
i = 0;
pos = {
   x: 40,
   y: 40,
   r: 30
}
pos1 = {
   x: 120,
   y: 150,
   r: 30
}
vel = {
   x: random(4, 5),
   y: random(1, 4)
}
vel1 = {
   x: random(4, 5),
   y: random(1, 4)
}


function checkCollision(pos) {
   if (pos.x > w || pos.x < 0 || pos.y > h || pos.y < 0) {
      return true;
   }
   return false;
}

function velOnCollision(pos, vel) {

   if (pos.x + pos.r > w || pos.x - pos.r < 0) {
      vel.x *= -1
   }
   if (pos.y + pos.r > h || pos.y - pos.r < 0) {
      vel.y *= -1;
   }

}
ii = 2;
c = 1;



function draw() {

   clearCanvas();


   pos.x += vel.x;
   pos.y += vel.y;
   pos1.x += vel1.x;
   pos1.y += vel1.y;

   velOnCollision(pos, vel);
   velOnCollision(pos1, vel1);
   for (i = 0; i < w; i += ii) {
      for (j = 0; j < h; j += ii) {
         d1 = pos.r / dist(pos.x, pos.y, i, j);
         d2 = pos1.r / dist(pos1.x, pos1.y, i, j);
         d = [d1 + d2];
         d1 = pos.r / dist(pos.x, pos.y, i + ii, j);
         d2 = pos1.r / dist(pos1.x, pos1.y, i + ii, j);
         d.push(d1 + d2);
         d1 = pos.r / dist(pos.x, pos.y, i, j + ii);
         d2 = pos1.r / dist(pos1.x, pos1.y, i, j + ii);
         d.push(d1 + d2);
         d1 = pos.r / dist(pos.x, pos.y, i + ii, j + ii);
         d2 = pos1.r / dist(pos1.x, pos1.y, i + ii, j + ii);
         d.push(d1 + d2);
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
               new line(dx, j, i, dy, '#f00', 2);
            } else if (activec[1] == 1) {
               dx = i + (c - d[1]) * ii / (d[0] - d[1]);
               dy = j + (c - d[1]) * ii / (d[3] - d[1]);
               new line(i, dy, dx, j, '#f00', 2);
            } else if (activec[2] == 1) {
               dx = i + (c - d[2]) * ii / (d[0] - d[2]);
               dy = j + (c - d[2]) * ii / (d[3] - d[2]);
               new line(dx, dy, i, j, '#f00', 2);
            } else if (activec[3] == 1) {
               dx = i + (c - d[3]) * ii / (d[1] - d[3]);
               dy = j + (c - d[3]) * ii / (d[2] - d[3]);
               new line(i, j, dx, dy, '#f00', 2);
            }
         } else if (activeconvers == 2) {
            if ((activec[0] == 1 && activec[1] == 1) || (activec[2] == 1 && activec[3] == 1)) {
               dy1 = j + (c - d[0]) * ii / (d[2] - d[0]);
               dy2 = j + (c - d[1]) * ii / (d[3] - d[1]);
               new line(i, dy1, i + ii, dy2, '#f00', 2);
            } else if ((activec[0] == 1 && activec[2] == 1) || (activec[1] == 1 && activec[3] == 1)) {
               dx1 = i + (c - d[0]) * ii / (d[1] - d[0]);
               dx2 = i + (c - d[2]) * ii / (d[3] - d[2]);
               new line(dx1, j, dx2, j + ii, '#f00', 2);
            }

         }
         else if(activeconvers ==3){
            if (activec[0] == 0) {
               dx = i + (c - d[0]) * ii / (d[1] - d[0]);
               dy = j + (c - d[0]) * ii / (d[2] - d[0]);
               new line(dx, j, i, dy, '#f00', 2);
            } else if (activec[1] == 0) {
               dx = i + (c - d[1]) * ii / (d[0] - d[1]);
               dy = j + (c - d[1]) * ii / (d[3] - d[1]);
               new line(i, dy, dx, j, '#f00', 2);
            } else if (activec[2] == 0) {
               dx = i + (c - d[2]) * ii / (d[0] - d[2]);
               dy = j + (c - d[2]) * ii / (d[3] - d[2]);
               new line(dx, dy, i, j, '#f00', 2);
            } else if (activec[3] == 0) {
               dx = i + (c - d[3]) * ii / (d[1] - d[3]);
               dy = j + (c - d[3]) * ii / (d[2] - d[3]);
               new line(i, j, dx, dy, '#f00', 2);
            }         }



      }



   }

   //new polygon(points1,'#fff',0,'blue',1);
   //new polygon(points2,'#fff',0,'blue',1);

   // new circle(pos.x,pos.y,pos.r,'#f006',1,'#ff0',0);
   //new circle(pos1.x,pos1.y,pos1.r,'#00f6',1,'#ff0',0);


   t += 0.01;
  requestAnimationFrame(draw);


}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();