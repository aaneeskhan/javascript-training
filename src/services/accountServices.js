import { BASE_API_URL } from "../../constants.js";
async function getAccountByRole(role) {
  let response = await fetch(
    `${BASE_API_URL}accounts/by-role?userRole=${role}`,
    {
      method: "GET",
    },
  );

  let data = await response.json();
  console.log(data);

  let arr = data.result;

  arr.forEach((element) => {
    let tr = "";
    tr += `
      <tr>
        <td>${element.name}</td>
        <td>${element.contactNo}</td>
        <td>${element.email}</td>
        <td>
          <a href="./details.html?id=${element.id}">details</a>
        </td>
      </tr>
    `;
    document.querySelector("#tbody").innerHTML += tr;
  });
}

getAccountByRole(1);
