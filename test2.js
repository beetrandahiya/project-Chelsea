///////////////////////////////////////////////////////////////////////////
class BinaryTree {
  constructor(value) {

    this.data = value;
    this.left = null;
    this.right = null;

  }

  insert(value) {
    if (this.data) {
      //adding to the left if the value is less than the data of parent node
      if (value < this.data) {
        if (this.left) {
          this.left.insert(value)
        } else {
          this.left = new BinaryTree(value)
        }
      }
      //adding to the right node if the value is more than the data of parent node
      else if (value > this.data) {
        if (this.right) {
          this.right.insert(value)
        } else {
          this.right = new BinaryTree(value)
        }

      } else {
        this.data = value
      }

    }

  }

  
}
//////////////////////////////////////////////////////////////////////////


elem = document.getElementById("container");
setCanvas(elem);

w = WIDTH;
h = HEIGHT;


a = new BinaryTree(100)
a.insert(20)
a.insert(121)
a.insert(35)
a.insert(10)


function draw() {

  // clearCanvas();



  // requestAnimationFrame(draw);

}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

draw();