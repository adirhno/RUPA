/** @format */

const renderer = new Renderer();
const apiManager = new APIManager();
let count = 1;

$("#load").on("click", function () {
  apiManager.loadData();
});

$("#display").on("click", function () {
  const data = apiManager.getData();
  renderer.mainRender(data);
});

//Extra
$("#saveUserPage").on("click", function () {
  if (count >= 3) {
    alert("you cant save users anymone!");
  }
  localStorage.setItem(`user${count}`, JSON.stringify(apiManager.getData()));
  count++;
});

$(".user").on("click", function () {
  if (count == 1) {
    alert("Add Users Please");
    return;
  }
  const id = $(this).data().id;
  const data = localStorage.getItem(`user${id}`);
  renderer.mainRender(JSON.parse(data));
});

$("#clearUsers").on("click", function () {
  localStorage.clear();
});
