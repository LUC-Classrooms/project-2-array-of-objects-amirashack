/*
 Project 2 - Array of Objects
 Name: 
 Comments: 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/

// Global Variables go here
var objects = new Array(10);



function setup(){
  // this function will run once
  createCanvas(320, 240); // create a 320 x 240 pixel drawing canvas
  for(var i = 0; i < objects.length; i++) {
   objects[i] = new UFO(random(width), random(height));
  }
}


function draw(){
  background(200); //light gray background
  for(var i = 0; i < objects.length; i++) {
    objects[i].move();
    objects[i].display();
  }

  
}

