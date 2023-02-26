// Write All Home  Page Script Here
let form = document.querySelector("form");
// console.log(form);
let LSData = JSON.parse(localStorage.getItem("movie-list")) || [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    form.name.value == "" ||
    form.mainActor.value == "" ||
    form.desc.value == "" ||
    form.release.value == "" ||
    form.category.value == "" ||
    form.price.value == ""
  ) {
    alert("Fill All Details");
  } else {
    let obj = {
      name: form.name.value,
      mainActor: form.mainActor.value,
      description: form.desc.value,
      releasedate: form.release.value,
      category: form.category.value,
      price: form.price.value,
    };
    LSData.push(obj);
    // console.log(LSData);
    localStorage.setItem("movie-list", JSON.stringify(LSData));
  }
  console.log(LSData);
});
