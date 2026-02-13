class Employee {
  id: number;
  name: string;
  salary: number;
  show() {
    console.log(
      `Employee ID: ${this.id}\nName: ${this.name}\nSalary: ${this.salary}`,
    );
}
//Parameterized constructor
  constructor(id: number, name: string, salary: number) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
}

let emp1 = new Employee(101, "Employee 1", 20000);

emp1.show();
console.log(emp1);


//Default Constructor
class Worker {
  id: number ;
  name: string ;
  salary: number;
  show() {
    console.log(
      `Worker ID: ${this.id}\nName: ${this.name}\nSalary: ${this.salary}`,
    );
  }
}

let work1 = new Worker();
work1.id = 201;
work1.name = "Worker 1";
work1.salary = 10000;

work1.show();
console.log(work1);

// Count of Objects
class Count {
  id: number;
  name: string;
  static count: number = 0;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    Count.count++;
  }
  show() {
    console.log(`ID: ${this.id}\nName: ${this.name}`);
  }
}

let count1 = new Count(101, "Count1");
let count2 = new Count(102, "Count2");
let count3 = new Count(103, "Count3");
let count4 = new Count(104, "Count4");

count1.show();
console.log(`The number of Objects created are: ${Count.count}`);
