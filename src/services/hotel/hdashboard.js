async function run() {
  let res = await fetch("https://trekdekashmirapi.logichubss.com/api/Hotels", {
    method: "GET",
  });
  let data = await res.json();
  console.log(data);
  if (data.isSuccess) {
    data.result.forEach((element) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
                <td>${element.name}</td>
                <td>${element.star}</td>
                <td>${element.state}</td>
                <td>${element.city}</td>
                <td id="dt">
                <a href="./hdetails.html?id=${element.id}"> details </a>
                </td>
            `;
      document.querySelector("#tbody").appendChild(tr);
    });
  }
  document
    .getElementById("search")
    .addEventListener("change", async function (e) {
      if (e.target.value.trim() === "") {
        window.location.reload();
      }

      const searchTerm = e.target.value.trim().toLowerCase();
      let res = await fetch(
        `https://trekdekashmirapi.logichubss.com/api/hotels/search/${searchTerm}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      let data = await res.json();
      console.log(data);

      document.getElementById("tbody").innerHTML = "";
      if (data.isSuccess) {
        data.result.forEach((element) => {
          let tr = document.createElement("tr");
          tr.innerHTML = `
                <td>${element.name}</td>
                <td>${element.star}</td>
                <td>${element.state}</td>
                <td>${element.city}</td>
                <td id="dt">
                <a href="hotel/hdetails.html?id=${element.id}"> details </a>
                </td>
            `;
          document.querySelector("#tbody").appendChild(tr);
        });
      } else {
        document.querySelector("#tbody").innerHTML = `
        <tr>
            <td colspan="5" style="text-align:center; color:red;">
                ${data.message}
            </td>
        </tr>
    `;
      }
    });
}
run();
