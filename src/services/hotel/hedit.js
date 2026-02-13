let params = new URLSearchParams(window.location.search);
let id = params.get("id");
console.log(id);

async function run() {
  let res = await fetch(
    `https://trekdekashmirapi.logichubss.com/api/Hotels/${id}`,
    {
      method: "GET",
    },
  );
  let data = await res.json();
  console.log(data);
  

  if (data.isSuccess) {
    let element = data.result;

    document.querySelector("#name").value = element.name;
    document.querySelector("#description").value = element.description;
    document.querySelector("#star").value = element.star;
    document.querySelector("#id").value = element.id;
  }

  document.forms[0].addEventListener("submit", async function (event) {
    event.preventDefault();
    let data = new FormData(document.forms[0]);
    let obj = Object.fromEntries(data);
    obj.star = Number(obj.star);
    let body = JSON.stringify(obj);
    console.log(body);

    let res = await fetch(
      "https://trekdekashmirapi.logichubss.com/api/Hotels",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      },
    );
    let dat = await res.json();
    console.log(dat);

    if (dat.isSuccess) {
      alert("change successful");
    }
  });
}
run();
