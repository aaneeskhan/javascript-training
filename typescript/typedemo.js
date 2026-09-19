// non primitive type
var Havells = /** @class */ (function () {
    function Havells() {
    }
    Havells.prototype.on = function () {
        console.log("Havells impletemented switch is on");
    };
    Havells.prototype.off = function () {
        console.log("Havells impletemented  switch is off");
    };
    return Havells;
}());
var Anchor = /** @class */ (function () {
    function Anchor() {
    }
    Anchor.prototype.on = function () {
        console.log("Anchor impletemented switch is on");
    };
    Anchor.prototype.off = function () {
        console.log("Anchor impletemented  switch is off");
    };
    return Anchor;
}());
var GoldMedal = /** @class */ (function () {
    function GoldMedal() {
    }
    GoldMedal.prototype.on = function () {
        console.log("switch is on GoldMedal");
    };
    GoldMedal.prototype.off = function () {
        console.log("switch is off GoldMedal");
    };
    return GoldMedal;
}());
var employee1 = {
    id: 101,
    name: 'ifra',
    gender: "female",
    salary: 50000,
    show: function () {
        console.log("Id ".concat(this.id));
        console.log("Name ".concat(this.name));
        console.log("Gender ".concat(this.gender));
        console.log("Salary ".concat(this.salary));
    }
};
var employee2 = {
    id: 102,
    name: 'shilpee',
    gender: "female",
    salary: 55000,
    show: function () {
        console.log("Id ".concat(this.id));
        console.log("Name ".concat(this.name));
        console.log("Gender ".concat(this.gender));
        console.log("Salary ".concat(this.salary));
    }
};
var employee3 = {
    id: 103,
    name: 'saba',
    gender: "female",
    salary: 60000,
    show: function () {
        console.log("Id ".concat(this.id));
        console.log("Name ".concat(this.name));
        console.log("Gender ".concat(this.gender));
        console.log("Salary ".concat(this.salary));
    }
};
var employee4 = {
    id: 104,
    name: 'owais',
    gender: "Male",
    salary: 65000,
    show: function () {
        console.log("Id ".concat(this.id));
        console.log("Name ".concat(this.name));
        console.log("Gender ".concat(this.gender));
        console.log("Salary ".concat(this.salary));
    }
};
var employee5 = {
    id: 105,
    name: 'Danish',
    gender: "Male",
    salary: 70000,
    show: function () {
        console.log("Id ".concat(this.id));
        console.log("Name ".concat(this.name));
        console.log("Gender ".concat(this.gender));
        console.log("Salary ".concat(this.salary));
    }
};
employee1.show();
// let employees=[employee1,employee2, employee3, employee4, employee5];
// employees.forEach(emp=>{
//     console.log(emp.email)
// })
