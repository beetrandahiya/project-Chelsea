/////////////////////////////
/////  TEST GPU.JS   ///////
/////  USING CHELSEA ///////
/////////////////////////////

const gpu = new GPU();

//write chelsea

gpu.addFunction(mapRange);

elem = document.getElementById("container");
setCanvas(elem);
w = WIDTH;
h = HEIGHT;


function draw() {

    clearCanvas();

    for (i = 0; i < w; i += 2) {
        for (j = 0; j < h; j += 2) {

           
            new rect(i, j, 2.5, 2.5, '#f00', 1, '#fff', 0, 'top-left', 0);

        }
    }

}


//draw stuff
draw();