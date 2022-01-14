

elem = document.getElementById("container");
setCanvas(elem);

w=WIDTH;
h=HEIGHT;



   fetch_mouse_pos(elem,'mousemove');
   
 
function draw() {
  
  clearCanvas();
  
  for(i=0;i<w;i+=2){
    for(j=0;j<h;j+=2){
        var a= mapRange(i,0,w,-2,1);
        var b= mapRange(j,0,h,-1.5,1.5);
        var ca=a;
        var cb=b;

        var n=0;
        while(n<100){

            var aa=a*a-b*b;
            var bb=2*a*b;
            a=aa+ca;
            b=bb+cb;
            if(a+b>4){
                break;
            }
            n++;
        }

        var c=mapRange(n,0,100,0,360);
        var cr=mapRange(n,0,100,0,186);
        var cg=mapRange(n,0,100,0,245);
        var cb=mapRange(n,0,100,0,247);
        var color='rgb('+cr+','+cg+','+cb+')';
        new rect(i,j,2.5,2.5,color,1,'#fff',0,'top-left',0);


    }};

 //requestAnimationFrame(draw);
 
}


///////////////////////////////////////////////////////////////////////////////


draw();