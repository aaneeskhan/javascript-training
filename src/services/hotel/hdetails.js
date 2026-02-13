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

    document.querySelector("#id").value = element.id;
    document.querySelector("#name").value = element.name;
    document.querySelector("#description").value = element.description;
    document.querySelector("#state").value = element.state;
    document.querySelector("#city").value = element.city;
    document.querySelector("#star").value = element.star;
    document.querySelector("#landmark").value = element.landmark;
    document.querySelector("#pincode").value = element.pincode;
    document.querySelector("#addressLine").value = element.addressLine;
    document.querySelector("#pfp").src =
      "https://trekdekashmirapi.logichubss.com/" + element.filePath;
    document.querySelector("#isVideo").value = element.isVideo;
    document.querySelector("#createdOn").value = element.createdOn;
  }

  document
    .querySelector("#edit")
    .addEventListener("click", async function (event) {
      event.preventDefault();
      window.location.href = `hedit.html?id=${id}`;
    });
  document
    .querySelector("#del")
    .addEventListener("click", async function (event) {
      let res = await fetch(
        `https://trekdekashmirapi.logichubss.com/api/Hotels/DeleteHotel/${id}`,
        {
          method: "DELETE",
        },
      );
      let data = await res.json();
      if (data.isSuccess) {
        alert("deleted successfully");
        window.location.href = "../hotels.html";
      } else {
        alert("failure");
      }
    });
}
run();


