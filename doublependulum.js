///////////////////////////////////////////////////////////////////////////////

//new circle(100, 100, 50, "#ff0000", "#000000");
//new circle(200, 200, 50, "#00ff00", "#000000");
t = 0;

new rect(100, 100, 100, 100, "#ff0000", 1, "#000000", 1, "top-left", 30);

///////////////////////////////////////////////////////////////////////////////


w=svg.clientWidth;
h=svg.clientHeight;

///////////////////////////////////////////////////////////////////////////////
canvw = 600;
canvh = 600;
r1 = 100;
r2 = 100;
m1 = 10;
m2 = 10;
a1 = Math.PI / 2;
a2 = Math.PI / 2;
a1_v = 0;
a2_v = 0;
a1_a = 0;
a2_a = 0;
g = 1;

function sin(x){
    return Math.sin(x);
}
function cos(x){
    return Math.cos(x);
}



//////////////////////////////////////////////////////////////////////////////

points=[];

function draw() {
    clearcanvas();
    let num1 = -g * (2 * m1 + m2) * sin(a1);
    let num2 = -m2 * g * sin(a1 - 2 * a2);
    let num3 = -2 * sin(a1 - a2) * m2;
    let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2);
    let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
    let a1_a = (num1 + num2 + num3 * num4) / den;
    num1 = 2 * sin(a1 - a2);
    num2 = a1_v * a1_v * r1 * (m1 + m2);
    num3 = g * (m1 + m2) * cos(a1);
    num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
    den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
    let a2_a = (num1 * (num2 + num3 + num4)) / den;

    x1 = r1 * sin(a1);
    y1 = r1 * cos(a1);
  
    x2 = x1 + r2 * sin(a2);
    y2 = y1 + r2 * cos(a2);
    new line(w/2,0+h/2, w/2+x1, y1+h/2 , "#8D2FED", 2 );
    new line(w/2 + x1, y1 +h/2, w/2+ x2, y2 +h/2 , "#8D2FED",2);

    new circle(w/2+x1, y1 +h/2, m1, "#C10FF0", "#000000");
    new circle(w/2+x2, y2 +h/2, m2, "hsl(300,100%,50%)", "#000000");

    a1_v += a1_a;
    a2_v += a2_a;
    a1 += a1_v;
    a2 += a2_v;
    if(points.length==0){
        px2=x2;
        py2=y2;
    }
    points.push([[w/2+x2, y2 +h/2],[w/2+px2, py2 +h/2]]);
    
    if(points.length>50){
        points.shift();
    }
    if(points.length>1){
        
        for(let i=0;i<points.length-1;i++){
            color=`hsl(${i*6},100%,50%)`
            strokew=mapRange(i,0,points.length-1,1,15);
            new line(points[i][0][0],points[i][0][1],points[i][1][0],points[i][1][1], color, strokew, "round");
        }
    }
 


    px2 = x2;
   py2 = y2;
    requestAnimationFrame(draw);
    
}

///////////////////////////////////////////////////////////////////////////////


draw();