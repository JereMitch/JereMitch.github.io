let name1 = document.getElementById("name-input");
let email = document.getElementById("email");
let input = document.getElementById("textarea");
let subBtn = document.getElementById("submit");


function inputField(e) {
  e.preventDefault();
  name1.value = "";
  email.value = "";
  input.value = "";
}

subBtn.addEventListener("click", inputField);