import {BASE_API_URL} from"../../constants.js";

let param = new URLSearchParams(location.search);
let id = param.get("id");
console.log(id);
async function getAccountById(id) {
  let response = await fetch(
    `${BASE_API_URL}/Accounts/${id}`,
    {
      method: "GET",
    },
  );
  let data = await response.json();
  console.log(data);

  let obj = data.result;
  document.querySelector("#name").value = obj.name;
  document.querySelector("#contact").value = obj.contactNo;
  document.querySelector("#email").value = obj.email;

}
getAccountById(id);
