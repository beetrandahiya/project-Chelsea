///////////////////////////////////////////////////////////////////////////////

//new circle(100, 100, 50, "#ff0000", "#000000");
//new circle(200, 200, 50, "#00ff00", "#000000");
t = 0;

new rect(100, 100, 100, 100, "#ff0000", 1, "#000000", 1, "top-left", 30);

///////////////////////////////////////////////////////////////////////////////


w=svg.clientWidth;
h=svg.clientHeight;



function draw() {
    clearcanvas();

    //new rect(100, 100, 100, 100, "#ff0000", 1, "#000000", 1, "top-left", 30);

    new text(100, 100, "Enough is E-fuckin-nough" , 30, "Arial","400");
    new regpolygon(300,300,50,3,0,"#444",3,"fff","0.2");
    new polygon([[100,200],[233,45],[45,533]],"#333",2,"#f34",1,true);

    
    requestAnimationFrame(draw);
    
}

///////////////////////////////////////////////////////////////////////////////


draw();