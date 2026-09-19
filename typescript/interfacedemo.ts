
// base type OR super type OR parent type
// derived type OR sub  type OR child type

import { Calc } from "./classdemo.js"

// generalization and specialization
interface Human{
   readonly id:string,
    name:string,   // required
    age?:number,  // option
    email:string,
    address:string,
    show1():void
}


let developer:Human={
    id:"LH101",
    name:"Irfan",
    email:"irfan@gmail.com",
    age:23,
    address:"baghat",
    show1() {
        console.log("show1 called")
    },
}





// reopening of interface
// interface Human{
//     runningBussiness():string;
// }

interface Men extends Human{
    salary:number,
    games:string
    show2():void,
    run():void
}

interface Women extends Human{
    cooking:string,
    washing:string,
    show3():void,
    run():void

}

interface robot extends Men, Women{

}


let calc=new Calc();
calc.sum(100,300)

// let obj:robot={
//     name:"Aqsa",
//     age:20,
//     address:"barzulla",
//     email:"aqsa@gmail.com",
//     cooking:"meat",
//     show1(){
//         console.log("show1 called")
//     },
//     show3() {
//         console.log("show3 called")
//     },
//     washing:"closthes",
//     games:"",
//     salary:50000,
//     show2() {
        
//     },
//     run(){
        
//     },
  
// }

// condition Relationship
// inheritance  is a relationship