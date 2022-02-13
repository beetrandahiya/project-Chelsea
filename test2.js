elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;

data={0: '9657', 1: '672', 2: '951', 3: '', 4: '8', 5: '0729', 6: '081', 7: '051', 8: '964', 9: '0582'}



data=Object.values(data);

nodeState=[];

data1=[];
for(i=0;i<data.length;i++){
   data1.push([])
   for(j=0;j<data[i].length;j++){
      data1[i].push(parseInt(data[i][j]));
      data1[i].sort();
   }
   nodeState.push(1);
}


d1=[];

for(i=0;i<data1.length;i++){
   for(j=0;j<data1[i].length;j++){
      k=parseInt(data1[i][j]);          // k is the index of connected node

      a=data1[i].length;
      b=data1[k].length;       //lengths of two connected nodes

      console.log(a,b);
      if(a>b){
         d1.push(i); 
         data1[i]=[];
         nodeState[i]=0;
         for(l=0;l<data1.length;l++){
            if(l!=i){
               if(data1[l].includes(i)){
                  console.log(l);
                  data1[l].splice(data1[l].indexOf(i),1);
                  console.log(data1[l]);
                  
               }
            }
         }
         break;
      }
      else if(a<b){
         d1.push(k);
         data1[k]=[];
         nodeState[k]=0;
         for(l=0;l<data1.length;l++){
            if(l!=k){
               if(data1[l].includes(k)){
                  console.log(l);
                  data1[l].splice(data1[l].indexOf(k),1);
                  console.log(data1[l]);

               }
            }
         }
         break;
      }
      
   }

}

for(i=0;i<data1.length;i++){
   if(data1[i].length==1){
      a=i;
      b=data1[i][0];
      console.log(a,b);
      if(a>b){
         data1[a]=[];
         data1[b]=[];
         d1.push(a);
         nodeState[a]=0;
      }
      else{
         data1[b]=[];
         data1[a]=[];
         d1.push(b);
         nodeState[b]=0;
      }
   }

}
















points1=points(WIDTH/2,HEIGHT/3,100,data1.length);


function draw() {


   for(i=0;i<points1.length;i++){
      if(nodeState[i]==1){
      new point(points1[i].x,points1[i].y,'#fff',5);}
      new text(points1[i].x+10,points1[i].y,i,20,'Inter',400,'#fff',0,'#695fe7');
   }
   for(i=0;i<data1.length;i++){
      for(j=0;j<data1[i].length;j++){
         k=data1[i][j];
         new line(points1[i].x,points1[i].y,points1[k].x,points1[k].y,'#695fe7',1);
       
   }
   }

   
}

function points(x,y,radius,sides){
   points=[];
   var angle = (Math.PI*2)/sides;
   for(var i=0; i<sides; i++){
       var x = x+radius*Math.cos(angle*i);
       var y = y+radius*Math.sin(angle*i);
       points.push({x:x,y:y});
   }
   return points;
}




///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();