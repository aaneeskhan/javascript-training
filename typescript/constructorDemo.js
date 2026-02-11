// obejct must have two thing
//1) properties | attributes | Data Members | Fields
//2) function | methods | member function


// function Employee(id, sal){
//     this.id=id;
//     this.salary=sal;
//     this.showDetails= function (){
//             console.log("Id",this.id)
//             console.log("Salary ",this.salary)
//     }
// }

function Developer(n, lang){
    this.name=n;
    this.language=lang;
    
}


 Developer.prototype.showData= function (){
            console.log("Name ",this.name)
            console.log("Language ",this.language)
    }




let d1= new Developer("owais","javascript");
d1.showData();
let d2= new Developer("danish","typescript")
d2.showData();

console.log(d1)



