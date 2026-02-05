let param = new URLSearchParams(location.search);
let id = param.get("id");
console.log(id);
async function getAccountById(id) {
  let response = await fetch(
    `https://trekdekashmirapi.logichubss.com/api/Accounts/${id}`,
    {
      mod: "GET",
    },
  );
  let data = await response.json();
  console.log(data);

  let obj = data.result;
  document.querySelector("#name").value = obj.name;
  document.querySelector("#contact").value = obj.contactNo;
  document.querySelector("#email").value = obj.email;
  document.querySelector("#editBtn").addEventListener("click", () => {
    location.href = `edit.html?id=${id}`;
  });
}
getAccountById(id);
