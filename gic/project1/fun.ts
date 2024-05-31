

////////////////////////////////////////FUNCTIONS:TS

//Simple Function,

//  function coffee (){
//      console.log(1 + 2 +3)
//  }
//  coffee()
// function coffee (){
//     console.log(1 + 2 +3)
// }
// coffee()
// coffee()

// function coffee (sugar){
//     console.log(sugar +1 + 2 +3)
// }
// coffee(2)
// coffee(1)



// function coffee (sugar){
// let cooked =sugar +1 + 2 +3
// console.log(cooked)
// }
// coffee(2)
// coffee(1)



// function coffee (sugar){
//     let cooked = sugar +1 + 2 + 3
//     return cooked
//     }
    
//  let responce = coffee(2)
// console.log(responce)



//function megi(salt , butter){
    // let cooked = 5 + salt + butter
    // console.log(cooked)
    // }
    // megi(1 , 4)
    
    // function  megi(salt,butter){
    //     let cooked = 5 + salt + butter
    //     return cooked
    // };
    //  let delivery1 = megi(1,4)
    //     console.log(delivery1)
       
//Arrow Funcion

// let coffee = () => 4 + 6 + 9
// let responce = coffee()
// console.log(responce)


// let cooffee = (sugar:any) => 4 + 6 + 9 + sugar
// let responc = cooffee(5)
// console.log(responc)
//////////////////////////////////////////////////////////////////////////////////

type employee = {
    designation : string;
    personalInfo:{
        name: string;
        dob :   number;
       eamail:  string
       gender:   string
       phoneNumber:number
},
        departmentInfo:{
            depName: string
            developers:  number
            productName: string
    }
   
}


const employees :employee = {
    designation : "software Engineer",
    personalInfo:{
        name: "afshan",
        dob :   2007,
       eamail:  "afshan@h.come",
       gender:   "female",
       phoneNumber:356328748,
},
        departmentInfo:{
            depName: "product",
            developers:  38,
            productName: "ss",
    }
   
}
console.log(employees.designation,"employee.designation")
console.log(employees.personalInfo,"employee.personalInfo.name")
console.log(employees.departmentInfo.depName,"employee.departmentInfo.depName")