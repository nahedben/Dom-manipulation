const text = document.querySelector(".title");
const changecol = document.querySelector(".changecolor");
const text3 = document.querySelector(".title3");

// text.style.color = "red";
// text3.style.visibility = "hidden";

// changecol.addEventListener("click", function () {
//   // if (text.style.visibility == "hidden") {
//   //   text.style.visibility = "visible";
//   // } else {
//   //   text.style.visibility = "hidden";
//   // }
//   text.style.visibility = "none";
// });

// Add classes

// text.classList.add("change");

// changecol.addEventListener("click", function () {
//   text.classList.add("change");
// });

changecol.addEventListener("click", () => {
  text.classList.toggle("change");
});
