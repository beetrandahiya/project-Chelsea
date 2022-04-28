elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;

t = 0;
i = 0;


ii = 5 ;
c = 1;
N=w/ii;


function gauss_seidel(A,x=[0,0,0],B){
    n=A.length;
    for(i=0;i<n;i++){
        d=B[i];
        for(j=0;j<n;j++){
            if(i!=j){
                d-=A[i][j]*x[j];
            }
        }
        x[i]=d/A[i][i];
    }
    return x;
}
/*
a=[[4, 1, 2],[3, 5, 1],[1, 1, 3]]
x=[0,0,0];
b=[4,7,3];

for(m=0;m<25;m++){
    x=gauss_seidel(a,x,b);
    console.log(x);
}
*/


    



function draw() {

   clearCanvas();
   

   t += 0.1;
 //requestAnimationFrame(draw);


}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();