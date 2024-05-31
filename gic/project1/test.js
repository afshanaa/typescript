///////////////////////////////////////////////////////PRACTIES. Ts
//OBJECT METHOD
//this is a an arrow function we use in typescript,
// const greets = () => {
//     console.log("Hello World")
// }
// //this function in object called method
// const cat = {
//     name : "whisper",
//     greets: () => {
//         console.log("cat says meow!")
//     }
// }
// cat.greets()
//result"dogs says meow!",
// const dogs = {
//     name : "whisper",
//     greets: () => {
//         console.log("dogs say wuff!")
//     }
// }
// dogs.greets()
//result"dogs say wuff!",
///////////////////////////////////////PLAIN METHOD
//PLAIN METHOD
// const student = {
//     name :"Ahmad",
//     gender:"male",
//     age: 25,
//     isFacultyMember: "true",
// };
// console.log(student, "student");
// const employee ={
//     name : "Almas",
//     designation: "Software Engineer",
//     email: "Almas@h.com",
//     joiningDate : "23 May 2022",
//     dob:  1987,
// };
// console.log(employee,"employee")
// const car ={
//   name : "corola",
//   color: "gray",
//   model: 2020,
//   powerSteering: true,
// };
// const car2 ={
//     name : "civics",
//     color: "balck",
//     model: 2022,
//     powerSteering: true,
//   };
// console.log(car.name, "car.name")
// console.log(car2.name, "car.name")
// console.log(employee.name,"employee.name")
///////////////////////////////////////////////////////////
var car = {
    name: "corola",
    color: "gray",
    model: 2020,
    powerSteering: true,
};
console.log(car, "old car object");
//we can chang property value of an object using dot notation and after 
//equalsign and assign value after it
var car2 = {
    name: "civics",
    color: "balck",
    model: 2022,
    powerSteering: true,
};
console.log(car, "new property change car object");
