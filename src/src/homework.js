
















// const arr1 =  [1, 2, 3, 4, 5, 5, 2, 7, 10]

// const arr2 = []

// arr1.forEach((e)=>{
//     if(arr2.includes(e)){
        
//     }
//     else{
//         arr2.push(e)
//     }
    
// })
// console.log(arr2);




// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6,7,8];
 
// const arr3 = []

// var result = array1.concat(array2) 

//  result.forEach((e)=>{
//     if(array1.includes(e) && array2.includes(e) && !arr3.includes(e)){
//         arr3.push(e)
//     }
//     else{
        
//     }

//  })

// console.log(arr3);

// const array1 = [1, 2, 3, 8 ,10];
// const array2 = [3, 4, 5, 6,10]
 


// // const commonArray = (p1, p2)=>{
  
// // }

// function commonArray2 (p1 , p2){

//     let arr3 = []

//     if (p1.length >= p2.length) {
//         p1.forEach((e) => {
//             if (p2.includes(e)) {
//                 arr3.push(e)
//             }
//         })
    
//     }
    
//     else{
//         // array1.length < array2.length
//         p2.forEach((e) => {
//             if (p1.includes(e)) {
//                 arr3.push(e)
//             }
//         })
//     }

   
//     return arr3
// }

// console.log(commonArray2 (array1,array2));



// var combinedArray3 = function(p1,p2){

// }

// if (array1.length >= array2.length) {
//     array1.forEach((e) => {
//         if (array2.includes(e)) {
//             arr3.push(e)
//         }
//     })

// }

// else{
//     // array1.length < array2.length
//     array2.forEach((e) => {
//         if (array1.includes(e)) {
//             arr3.push(e)
//         }
//     })
// }
   


// console.log(arr3);



// console.log(result); // Output: [1, 2, 3, 4, 5]




// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6, 7, 8]

// var arr3 = []
// var arr4 = []

// var result = array1.concat(array2)
// // result = [1, 2, 3, 4, 3,4, 5, 6, 7, 8 ]
  
//   result.forEach((e)=>{
//       if(arr3.includes(e)){
//           arr4.push(e)
//       }
//       else{
//           arr3.push(e)
//       }
//   })




// console.log(`arr3 ${arr3}`)
// console.log(` arr4 ${arr4}`)


// Find Date of year

// Find who are older than 23y

// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 23 }
// ]

// const currentDate = new Date().getFullYear()

// users.forEach((users)=>{
//  const DOB =  currentDate - users.age
   
//  console.log(`Name:${users.name} Age:${ users.age}  DOB: ${DOB}`);

// })


// users.forEach((e)=>{
//    if(e.age > 23){
//     console.log(` ${e.name}, ${e.age} is older then 23`);
    
//    }
    
// })



// const products = [
//     { productName: 'Laptop',     category: 'Electronics',   availableQty: 10,   price: 500 },
//     { productName: 'Smartphone', category: 'Electronics',   availableQty: 5,    price: 1500 },
//     { productName: 'T-Shirt',    category: 'Clothing',      availableQty: 20,   price: 50 },
//     { productName: 'Jeans',      category: 'Clothing',      availableQty: 15,   price: 30 },
//     { productName: 'Apple',      category: 'Groceries',     availableQty: 100,  price: 5 },
//     { productName: 'Milk',       category: 'Groceries',     availableQty: 50,   price: 10 },
    
// ]


// var categoryQty = {}

//    products.forEach((e)=>{
//       const category = e.category
//       var qty = e.availableQty

//       console.log(category);
//       console.log(qty);
      
//    })


// var unicproduct = []
// var copyproduct = []

// products.forEach((e)=>{
//     if(unicproduct.includes(e.category)){
//         copyproduct.push(e.category)
//     }

//     else{
//          unicproduct.push(e.category)
//     }
// })

// console.log(unicproduct);

// console.log(copyproduct);


// // low to High by Price
// products.sort((a,b)=>{
//    return a.price - b.price
// })

// products.forEach((e)=>{
//     console.log(e);
    
// })

//High to low by Price

// products.sort((a,b)=>{
//      return b.price - a.price
// })
//  products.forEach((e)=>{
//     console.log(e);
    
//  })



// const users = [
//     { name: 'Alice', age: 21 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 23 }
// ]

//  const currentDate = new Date().getFullYear()

// users.forEach((users)=>{
//  const DOB =  currentDate - users.age
   
//  console.log(`Name:${users.name} Age:${ users.age}  DOB: ${DOB}`);

// })

// const high = users.sort((a,b)=>{
//   return  b.age - a.age
// })
// console.log(high)
// high.forEach((e)=>{
//    return e
      
//   })

// console.log(highAge)


// let array = []
// products.forEach((item) =>{
//     var selectedItem = array.find(x=>x.category == item.category);
//     if(selectedItem != null){
//         selectedItem.availableQty += item.availableQty;
//     }
//     else{
//         var newObj = {category: item.category , availableQty : item.availableQty};
//         //First Step
//         array.push(newObj);
//     }
// })

// console.log(array);






// const products = [
//     { productName: 'Laptop',     category: 'Electronics',   availableQty: 10,   price: 500 },
//     { productName: 'Smartphone', category: 'Electronics',   availableQty: 5,    price: 1500 },
//     { productName: 'T-Shirt',    category: 'Clothing',      availableQty: 20,   price: 50 },
//     { productName: 'Jeans',      category: 'Clothing',      availableQty: 15,   price: 30 },
//     { productName: 'Apple',      category: 'Groceries',     availableQty: 100,  price: 5 },
//     { productName: 'Milk',       category: 'Groceries',     availableQty: 50,   price: 10 },
    
// ]

//    const productByPriceRange = (products, lowPrice , highPrice)=>{
//       var searchBypriceItems = products.filter((item)=>{
//            if( item.price >= lowPrice && item.price <= highPrice) {
//                 return item;
//            } 
//       })
//       return searchBypriceItems

//    }
//     console.log(productByPriceRange(products,500,1500));
    




//   const findProductsByCategory = (products,categoryName)=>{
//      var allCategorysItem =  products.filter((value, index, array)=>{
//         return value.category == categoryName
//      })
//      return allCategorysItem

//   }

//   console.log(findProductsByCategory(products,"Clothing"));
  

// import React, { useEffect } from 'react';

// const Batch = () => {
//   // This useEffect is to handle DOM element interactions similar to the plain JS example you provided
//   useEffect(() => {
//     const btnElem = document.getElementById("formSubmit");

//     let name = document.getElementById("name");
//     let detail = document.getElementById("detail");
//     let courseFee = document.getElementById("courseFee");
//     let startingDate = document.getElementById("startingDate");
//     let duration = document.getElementById("duration");
//     let instructor = document.getElementById("instructor");
//     let insQualification = document.getElementById("insQualification");
//     let uid = document.getElementById("uid");

//     // Adding event listener for the submit button
//     btnElem.addEventListener('click', function () {
//       // Build the data object in a similar way to the provided example
//       var data = {
//         name: name.value,
//         detail: detail.value,
//         courseFee: courseFee.value,
//         startingDate: startingDate.value,
//         duration: duration.value,
//         instructor: instructor.value,
//         insQualification: insQualification.value,
//         uid: uid.value
//       };

//       // Stringify the data object
//       var payload = JSON.stringify(data);
//       console.log(payload); // Check payload in the console

//       // Now simulate the submission process
//       const token = process.env.REACT_APP_JWT_TOKEN; // Your JWT Token

//       const requestOptions = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: payload, // Use the payload here
//         redirect: 'follow'
//       };

//       fetch("http://localhost:4200/batch", requestOptions)
//         .then(response => response.json())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
//     });
//   }, []); // Empty array ensures this effect only runs once, after the component mounts

//   return (
//     <div>
//       <h2>Create New Batch</h2>
//       <form>
//         <input
//           type="text"
//           id="name"
//           placeholder="Batch Name"
//         />
//         <input
//           type="text"
//           id="detail"
//           placeholder="Details"
//         />
//         <input
//           type="text"
//           id="courseFee"
//           placeholder="Course Fee"
//         />
//         <input
//           type="date"
//           id="startingDate"
//           placeholder="Starting Date"
//         />
//         <input
//           type="text"
//           id="duration"
//           placeholder="Duration"
//         />
//         <input
//           type="text"
//           id="instructor"
//           placeholder="Instructor"
//         />
//         <input
//           type="text"
//           id="insQualification"
//           placeholder="Instructor Qualification"
//         />
//         <input
//           type="text"
//           id="uid"
//           placeholder="Unique ID"
//         />
//         <button type="button" id="formSubmit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Batch;



// const foodTracker = [
//   {
//     day: 'Monday',
//     breakfast: 300,
//     lunch: 300,
//     snacks: 150,
//     dinner: 500
//   },
//   {
//     day: 'Tuesday',
//     breakfast: 250,
//     lunch: 450,
//     snacks: 200,
//     dinner: 550
//   },
//   {
//     day: 'Wednesday',
//     breakfast: 350,
//     lunch: 550,
//     snacks: 100,
//     dinner: 700
//   },
//   {
//     day: 'Thursday',
//     breakfast: 400,
//     lunch: 600,
//     snacks: 180,
//     dinner: 650
//   },
//   {
//     day: 'Friday',
//     breakfast: 280,
//     lunch: 480,
//     snacks: 120,
//     dinner: 580
//   },
//   {
//     day: 'Saturday',
//     breakfast: 320,
//     lunch: 520,
//     snacks: 160,
//     dinner: 620
//   }
// ];



// //   const midAfternoonCalories = [100, 120, 105, 110, 100, 130]



// // for(i=0; i<foodTracker.length; i++){
// //   foodTracker[i].midAfternoonCalories = midAfternoonCalories[i]
// // }

// // console.log(foodTracker);

// foodTracker.push({
//   day: 'Sunday',
//   breakfast: 370,
//   lunch: 430,
//   snacks: 140,
//   dinner: 530,
//   midAfternoonCalories: 150
// })

// console.log(foodTracker);



// for(i=0 ; i<foodTracker.length ; i++){
//   const totalCalorie = foodTracker[i].breakfast +
//                       foodTracker[i].lunch +
//                       foodTracker[i].snacks +
//                       foodTracker[i].dinner +
//                       foodTracker[i].midAfternoonCalories
//      foodTracker[i].totalCalorie = totalCalorie                 
// }


// console.log(foodTracker);


// for(i=0; i<foodTracker.length ; i++){
//  const totalmeal = 5

//  const avgCalorie =  foodTracker[i].totalCalorie / totalmeal

//    foodTracker[i].avgCalorie =avgCalorie
// }

// console.log(foodTracker);
