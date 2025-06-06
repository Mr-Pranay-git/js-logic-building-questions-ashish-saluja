

// area of rectangle 
// L*b
function Area(length, breath){
   if(length || breath <0){
     console.log("Invalid input. Length and breath should be positive numbers.");
   }
   else{
     const area_rectangle = length * breath
     console.log(area_rectangle);
   }
}
Area(-12,-1)
Area(10,0)
