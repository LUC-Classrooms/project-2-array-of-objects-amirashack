/**
 * Add code for your class constructor in this file
 */
function UFO(tempX, tempY){ 
    // this constructor expects two arguments
    // all object properties and methods begin with "this."
    this.x = tempX; // assign 1st argument to this.x 
    this.y = tempY; // assign 2nd argument to this.y
    this.d = 50; // initialize .d property to 50
    this.speedX = random(-1, 1); // initialize .speed to a random number between 1 and -1
    this.speedY = random(-1, 1);
  
    // methods are functions that are assigned to property names
    this.move = function() {
    // define how the object will change location on screen each frame
      this.x += this.speedX; // move by the value of .speedX
      this.y += this.speedY;
      if (this.x > width || this.x < 0){
      // if the object reaches the right edge OR left edge
        this.speedX = this.speedX * -1; // reverse polarity!
      }
      if (this.y > height || this.y < 0){
        this.speedY = this.speedY * -1;
      }
    }
    this.display = function(){ 
      // define how the object will look
      push(); //create a transparency layer for the object
      translate(this.x, this.y) // center the drawing at the .x and .y properties of the object
      fill(255, 0, 100); //set the color
      ellipse(0, 0, this.d/2, this.d); 
      rotate(PI / 2);
      ellipse(0, 0, this.d/2, this.d);
      rotate(QUARTER_PI);
      ellipse(0, 0, this.d/2, this.d);
      rotate(HALF_PI);
      ellipse(0, 0, this.d/2, this.d);
      rotate(PI / 4);
      fill("yellow");
      ellipse(0, 0, this.d/2, this.d/2);
      pop();

    }
  } // end of MyClass() constructor