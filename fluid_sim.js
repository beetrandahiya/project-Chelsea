elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;

t = 0;
i = 0;


ii = 5 ;
c = 1;
N=w/ii;

//fluid simulation

//
densities=[];
s=[];


//
function IX(x, y) {
   return x+y*N;
}
class Fluid{
    constructor(){
        this.s=new Array(w/ii*h/ii);
        this.densities=new Array(w/ii*h/ii);
        this.vx=new Array(w/ii*h/ii);
        this.vy=new Array(w/ii*h/ii);
        this.vx0=new Array(w/ii*h/ii);
        this.vy0=new Array(w/ii*h/ii);
    }

    addDensity(x,y,d){
        this.densities[IX(x,y)]+=d;
    }
    addVelocity(x,y,vx,vy){
        this.vx[IX(x,y)]+=vx;
        this.vy[IX(x,y)]+=vy;
    }

}

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

function diffusion(b,x,x0,diff,dt){
    a=dt*diff*N*N;
    for(k=0;k<20;k++){
        for(i=0;i<N;i++){
            for(j=0;j<N;j++){
                x[IX(i,j)]=(x0[IX(i,j)]+a*(x[IX(i-1,j)]+x[IX(i+1,j)]+x[IX(i,j-1)]+x[IX(i,j+1)]))/
                (1+4*a);
            }
        }
    }
    set_bnd(N,b,x);
}
function set_bnd(N , b , x){
    for(i=1;i<=N;i++){
        x[IX(0,i)]=b[0];
        x[IX(N,i)]=b[1];
        x[IX(i,0)]=b[2];
        x[IX(i,N)]=b[3];
    }
    x[IX(0,0)]=0.5*(b[0]+b[2]);
    x[IX(N,0)]=0.5*(b[0]+b[2]);
    x[IX(0,N)]=0.5*(b[1]+b[2]);
    x[IX(N,N)]=0.5*(b[1]+b[2]);
}

function advect(b, d, d0,u,v, dt) {
    N=d.length;
    dt0=dt*N;
    for (i=1;i<=N;i++) {
        for (j=1;j<=N;j++) {
            x=i-dt0*u[IX(i,j)];
            y=j-dt0*v[IX(i,j)];
            if (x<0.5) x=0.5;
            if (x>N+0.5) x=N+0.5;
            if (y<0.5) y=0.5;
            if (y>N+0.5) y=N+0.5;
            i0=Math.floor(x);
            i1=i0+1;
            j0=Math.floor(y);
            j1=j0+1;
            s1=x-i0;
            s0=1-s1;
            t1=y-j0;
            t0=1-t1;
            d[IX(i,j)]=s0*(t0*d0[IX(i0,j0)]+t1*d0[IX(i0,j1)])+
            s1*(t0*d0[IX(i1,j0)]+t1*d0[IX(i1,j1)]);
        }
    }
    set_bnd(N, b, d);
}

function project(u,v,p,div){
    N=u.length;
    for(i=1;i<=N;i++){
        for(j=1;j<=N;j++){
            div[IX(i,j)]= -0.5*(u[IX(i+1,j)]-u[IX(i-1,j)]+v[IX(i,j+1)]-v[IX(i,j-1)])/N;
            p[IX(i,j)]=0;
        }
    }
    set_bnd(N,0,div);
    set_bnd(N,0,p);
    gauss_seidel(0,p,div);
    for(i=1;i<=N;i++){
        for(j=1;j<=N;j++){
            u[IX(i,j)]-=0.5*N*(p[IX(i+1,j)]-p[IX(i-1,j)]);
            v[IX(i,j)]-=0.5*N*(p[IX(i,j+1)]-p[IX(i,j-1)]);
        }
    }
    set_bnd(N,1,u);
    set_bnd(N,2,v);
}



    

for(i=0;i<w/ii;i++){
    densities[i]=[]; 
    for(j=0;j<h/ii;j++){
        densities[i][j]=random(0,1);
        v[i][j]=0;
        v0[i][j]=0;
    }
}


function draw() {

   clearCanvas();
   
   for(i=0;i<densities.length;i++){
         for(j=0;j<densities[i].length;j++){
             vc=mapRange(densities[i][j],0,1,0,255);
                new rect(i*ii,j*ii,ii,ii,`rgb(${vc},${vc},${vc})`,1,0,0); 
            }
    }
  

   t += 0.1;
 //requestAnimationFrame(draw);


}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();