const userList = document.querySelectorAll(".name-list li");

// console.log(userList);
for (user of userList) {
  // console.log(user.style.color);
  user.addEventListener("click", function () {
    // console.log(user);
    this.style.color = "red";
    // console.log(user.style.color);
  });
}
