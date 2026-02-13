function Student(id,name,marks){
    this.id=id
    this .name=name,
    this.marks=marks;
    // this.showDetails = function(){
    //     console.log(`Id=${this.id}\nName=${this.name} \nSalary=${this.marks}`);
    // }
}
Student.prototype.showDetails=function(){
    console.log(`Id=${this.id}\nName=${this.name} \nMarks=${this.marks}`)

}
let student1=new Student(101,"Asim" , 20)
let student2=new Student(102,"Danish" , 10)
let student3 = new Student(103, "Anees", 5);
console.dir(student1)
student1.showDetails()
student2.showDetails()
student3.showDetails();