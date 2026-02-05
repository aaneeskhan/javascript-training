import { API_BASE_URL } from "../../constants.js";

//1) variable
//2) const
//3) functions
//4) object
//5) array
// type       script

y="hello"
let x=10;
x="hello";
let myPersonalNumber = 100;
const pi = 3.14;

export   default async function getAllAccountsByRole(role) {
  const response = await fetch(
    API_BASE_URL + "api/accounts/by-role?userRole=" + role,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        LH: "Logic Hub Software Solutions",
      },
    },
  );

  return await response.json();
}




const employee = {
  id: 101,
  name: "ifra",
  salary: 50000,
};

const employeeList = [
  {
    id: 101,
    name: "ifra",
    salary: 50000,
  },
  {
    id: 102,
    name: "shilpee",
    salary: 50000,
  },
  {
    id: 103,
    name: "mehvish",
    salary: 50000,
  },
  {
    id: 104,
    name: "aqsa",
    salary: 50000,
  },
  {
    id: 101,
    name: "ifra",
    salary: 50000,
  },
  {
    id: 101,
    name: "ifra",
    salary: 50000,
  },
  {
    id: 101,
    name: "ifra",
    salary: 50000,
  },
];

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}
function mod(x, y) {
  return x % y;
}

export {
  myPersonalNumber,
  pi,
  add,
  sub,
  mul,
  div,
  mod,
  employee,
  employeeList,
};
