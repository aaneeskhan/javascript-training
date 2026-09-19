var Developer = /** @class */ (function () {
    function Developer(id, name, salary) {
        this._id = id,
            this.name = name,
            this.salary = salary;
        Developer.count++;
    }
    Object.defineProperty(Developer.prototype, "id", {
        // public setData(id:number, name:string, salary:number){
        //     this.id=id,
        //     this.name=name,
        //     this.salary=salary;
        // }
        // setter and getter
        // read and write
        // mutator and accessor
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Developer.prototype.getData = function () {
        var arr = [this.id, this.name];
        // let c=[this.id, this.name]
        return arr;
    };
    Object.defineProperty(Developer.prototype, "Name", {
        // read and write
        get: function () {
            return this.name;
        },
        set: function (name) {
            if (name !== "" && name.length > 5) {
                this.name = name;
            }
            else
                console.log("lenght must me greate than 4 and not emplty");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Developer.prototype, "Salary", {
        get: function () {
            return this.salary;
        },
        set: function (sal) {
            this.salary = sal;
        },
        enumerable: false,
        configurable: true
    });
    Developer.prototype.showDetails = function () {
        console.log("Id : ".concat(this.id, " Name : ").concat(this.name, " Salary ").concat(this.salary));
    };
    Developer.showTotalEmployee = function () {
        console.log("Total Developers Created ".concat(Developer.count));
    };
    Developer.count = 0;
    return Developer;
}());
var d1 = new Developer(101, "Ifra", 70000); // constructor() implicitly call constructor function;
//  console.log(d1.getName());
// d1.getName("ksjdf")
d1.Name = "ifram mir";
var n = d1.Name;
d1.id = 201;
//console.log(n)
var r = d1.getData();
console.log('fff', r);
