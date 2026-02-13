var Employee = /** @class */ (function () {
    //Parameterized constructor
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.show = function () {
        console.log("Employee ID: ".concat(this.id, "\nName: ").concat(this.name, "\nSalary: ").concat(this.salary));
    };
    return Employee;
}());
var emp1 = new Employee(101, "Employee 1", 20000);
emp1.show();
console.log(emp1);
//Default Constructor
var Worker = /** @class */ (function () {
    function Worker() {
    }
    Worker.prototype.show = function () {
        console.log("Worker ID: ".concat(this.id, "\nName: ").concat(this.name, "\nSalary: ").concat(this.salary));
    };
    return Worker;
}());
var work1 = new Worker();
work1.id = 201;
work1.name = "Worker 1";
work1.salary = 10000;
work1.show();
console.log(work1);
// Count of Objects
var Count = /** @class */ (function () {
    function Count(id, name) {
        this.id = id;
        this.name = name;
        Count.count++;
    }
    Count.prototype.show = function () {
        console.log("ID: ".concat(this.id, "\nName: ").concat(this.name));
    };
    Count.count = 0;
    return Count;
}());
var count1 = new Count(101, "Count1");
var count2 = new Count(102, "Count2");
var count3 = new Count(103, "Count3");
var count4 = new Count(104, "Count4");
count1.show();
console.log("The number of Objects created are: ".concat(Count.count));
