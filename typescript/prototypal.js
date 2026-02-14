

let emp1={
    id:101,
    name:"ifra",
    show(){
        console.log('emp1 show fun')
    }
}

// console.log(emp1)

let emp2={
    salary:60000,
     
    __proto__:emp1,
}


let x=10;
console.log(x.__proto__.__proto__.__proto__)

let str="Ifra";
console.log(str.__proto__.__proto__)

// console.log(emp2.__proto__)




// function Employee(id, name, salary){
//         this.id=id;
//         this.name=name;
//         this.salary=salary
       
// }





// let emp1= new Employee(101,"Ifra",50000);
// let emp2= new Employee(102,"Shilpee",50000);
// let emp3= new Employee(102,"Aqsa",50000);
// let emp4= new Employee(102,"Saba",50000);



//  Employee.prototype.showDetails=function(){
//         console.log(`Id = ${this.id} Name = ${this.name} Salary ${this.salary}`);
//     }

//     console.log(emp1)
// console.log(emp2)
// console.log(emp3)
// console.log(emp4)
// emp1.prototype.showDetails= function(){
//         console.log(`Id = ${this.id} Name = ${this.name} Salary ${this.salary}`)
//     }

// emp2.prototype.showDetails= function(){
//         console.log(`Id = ${this.id} Name = ${this.name} Salary ${this.salary}`)
//     }



