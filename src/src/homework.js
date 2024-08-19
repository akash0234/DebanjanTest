


// 
// 1.Calculator

// 2.Area of cone/ area of tube

// 3.Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"]


// 4. // Example usage:
// var numbers = [1, 5, 12, 124, 51, 412];
// write a code to add heihest and lowest


// var numbers = [1, 5, 12, 124, 51, 412]

// numbers.sort((a,b)=>{
//     return a-b
// })

//  var minnumbers = numbers[0] 
//  var maxnumber = numbers[numbers.length - 1]

//  sum = minnumbers + maxnumber

// console.log(sum);



// 3.Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"]

// myColor = ["Red", "Green", "White", "Black"]

// var allcolor =  myColor.join(" , ")
 
// console.log(allcolor);


// let radius = 5;
// let height = 10;

// function calculateConeArea(radius, height) {
//     return Math.PI * radius * (radius + height);   //π×r×(r+l)
// } 

// let totalArea = calculateConeArea(radius,height);
// console.log(" area of the cone is: " + totalArea.toFixed(2));




let radius = 10;
let height = 15;
function calculateConeArea(radius, height) {
    return Math.PI * radius * (radius + height);
}

let totalArea = calculateConeArea(radius, height);
console.log("area of the cone: " + totalArea.toFixed(2));
