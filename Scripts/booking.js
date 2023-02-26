// Write All `All Movies`  Page Script Here
let LSData = JSON.parse(localStorage.getItem("movie-list")) || [];
let tbody = document.querySelector("tbody");
let filter = document.getElementById("filter");
let count = document.querySelector("#movie-count");
count.innerText = LSData.length;
function displaytable(data) {
  tbody.innerHTML = "";
  data.forEach(function (element, index) {
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

    let buy = document.createElement("td");
    buy.innerText = "Buy";
    buy.style.backgroundColor = "royalblue";
    buy.style.color = "white";
    buy.style.textAlign = "center";
    buy.addEventListener("click", function () {
      addData("buy-list", element);
      removeData(LSData, index);
    });

    tr.append(name, mainActor, description, releasedate, category, price, buy);
    tbody.append(tr);
  });
}
displaytable(LSData);

function addData(key, value) {
  let newLsData = JSON.parse(localStorage.getItem(key)) || [];
  newLsData.push(value);
  localStorage.setItem(key, JSON.stringify(newLsData));
}
function removeData(data, index) {
  LSData = data.filter(function (el, i) {
    return i != index;
  });
  localStorage.setItem("movie-list", JSON.stringify(LSData));
  displaytable(LSData);
  count.innerText = Number(LSData.length);
}
filter.addEventListener("change", function () {
  if (filter.value == "" || filter.value == "Select Category") {
    displaytable(LSData);
  } else {
    let filteredData = LSData.filter(function (el) {
      return el.category == filter.value;
    });
    displaytable(filteredData);
  }
});
