import getAllAccount, { add, employee, employeeList,  myPersonalNumber as pNum, pi, sub } from "./src/services/accountServices.js";
// import  * as data  from "./src/services/accountServices.js";


async function loadData(){

   const data=  await getAllAccount(1);
   console.log(data);
}
const emp= employee;
const empList= employeeList;
console.log(empList)
console.log(emp);
loadData();

const s= add(10,30)
const subtraction= sub(100,30)
console.log('The sum of two numbers :',s)
console.log('The sum of two numbers :',subtraction)
console.log("The number is ",pNum)
console.log("The number is ",pi)