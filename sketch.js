function setup() {
    createCanvas(500, 500);
    background("black");
  }
  
  function draw() {
      stroke("black")
      fill("blue");
    
      // console.log(mouseIsPressed)
      if(mouseIsPressed){
         rect(mouseX, mouseY, 10, 30)
    }
  
  }
  
  