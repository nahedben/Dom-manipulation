const userList = document.getElementById("listname");

const listInput = document.querySelector(".list-input");
const addlistbtn = document.querySelector(".add-list-btn");
// for (e of userList) {
//   e.style.color = "green";
// }
addlistbtn.addEventListener("click", function () {
  console.log(userList);
  const newli = document.createElement("LI");
  const liContent = document.createTextNode(listInput.value);
  const span = document.createElement("SPAN");
  span.setAttribute("class", "spancl");
  const spanText = document.createTextNode(" Here.");

  span.appendChild(spanText);

  newli.style.color = "red";
  // span.style.backgroundColor = "yelllow";
  newli.style.textTransform = "capitalize";
  newli.appendChild(liContent);
  newli.appendChild(span);
  // document.body.appendChild(newli);
  userList.appendChild(newli);
  listInput.value = "";
  // userList.appendChild(newli);
});

// console.log(userList);
// for (user of userList) {
//   // console.log(user.style.color);
//   user.addEventListener("click", function () {
//     // console.log(user);
//     this.style.color = "red";
//     // console.log(user.style.color);
//   });
// }
