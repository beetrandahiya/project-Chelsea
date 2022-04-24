
elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;

function draw(){
    clearCanvas();

    requestAnimationFrame(draw);
}