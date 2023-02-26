// Write All `My Movies`  Page Script Here
let LSData = JSON.parse(localStorage.getItem("buy-list")) || [];
let tbody = document.querySelector("tbody");
function displaytable(data) {
  data.forEach(function (element) {
    let tr = document.createElement("tr");

    let name = document.createElement("td");
    name.innerText = element.name;

    let mainActor = document.createElement("td");
    mainActor.innerText = element.mainActor;

    let description = document.createElement("td");
    description.innerText = element.description;

    let releasedate = document.createElement("td");
    releasedate.innerText = element.releasedate;

    let category = document.createElement("td");
    category.innerText = element.category;

    let price = document.createElement("td");
    price.innerText = element.price;

    tr.append(name, mainActor, description, releasedate, category, price);
    tbody.append(tr);
  });
}
displaytable(LSData);
