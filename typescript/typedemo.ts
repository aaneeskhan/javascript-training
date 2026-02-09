// non primitive type


// type
 type EmployeeType={
    id:number,
    name:string,
    gender:string,
    salary:number,
//     show(){

//     }
}


// let obj={
//         id:101,
//         name:"abc",
//         show:()=>{

//         },
//         show1(){

//         },
//         show2:function(){

//         }
// }

interface Switch{
        on():void,  // function signature function declaration function prototype
        off():void,
}



class Havells implements  Switch{
        on(): void {  // function definition
                console.log("Havells impletemented switch is on")  
        }
        off(): void {
                console.log("Havells impletemented  switch is off")  
                
        }
}


class Anchor implements  Switch{
        on(): void {  // function definition
                console.log("Anchor impletemented switch is on")  
        }
        off(): void {
                console.log("Anchor impletemented  switch is off")  
                
        }
}


class GoldMedal implements  Switch{
        on(): void {  // function definition
                console.log("switch is on GoldMedal")  
        }
        off(): void {
                console.log("switch is off GoldMedal")  
                
        }
}

 interface Employee{
    id:number,
    name:string,
    gender:string,
    salary:number,
    show():void;// proto
}




let employee1:Employee={
         id:101,
         name:'ifra',
         gender:"female",
         salary:50000,
         show():void {
                console.log(`Id ${this.id}`)
                console.log(`Name ${this.name}`)
                console.log(`Gender ${this.gender}`)
                console.log(`Salary ${this.salary}`)
         }
}

let employee2:Employee={
        id:102,
        name:'shilpee',
        gender:"female",
        salary:55000,
         show():void {
                console.log(`Id ${this.id}`)
                console.log(`Name ${this.name}`)
                console.log(`Gender ${this.gender}`)
                console.log(`Salary ${this.salary}`)
         }
}

let employee3:Employee={
        id:103,
        name:'saba',
        gender:"female",
        salary:60000,
         show():void {
                console.log(`Id ${this.id}`)
                console.log(`Name ${this.name}`)
                console.log(`Gender ${this.gender}`)
                console.log(`Salary ${this.salary}`)
         }
}

let employee4:Employee={
        id:104,
        name:'owais',
        gender:"Male",
        salary:65000,
         show():void {
                console.log(`Id ${this.id}`)
                console.log(`Name ${this.name}`)
                console.log(`Gender ${this.gender}`)
                console.log(`Salary ${this.salary}`)
         }
}

let employee5:Employee={
        id:105,
        name:'Danish',
        gender:"Male",
        salary:70000,
         show():void {
                console.log(`Id ${this.id}`)
                console.log(`Name ${this.name}`)
                console.log(`Gender ${this.gender}`)
                console.log(`Salary ${this.salary}`)
         }
}

employee1.show();
// let employees=[employee1,employee2, employee3, employee4, employee5];
// employees.forEach(emp=>{
//     console.log(emp.email)
// })