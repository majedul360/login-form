function formValidation() {
  const userName = document.getElementById("name");
  const userPassword = document.getElementById("password");
  const nameValue = userName.value;
  const passwordValue = userPassword.value;
  const nameError = document.getElementById("name-error");
  const passwordError = document.getElementById("password-error");
  let flag = 1;

  if (nameValue == "") {
    nameError.innerText = "user name is empty";
    flag = 0;
  }
  if (passwordValue == "") {
    passwordError.innerText = "password is empty";
    flag = 0;
  } else if (passwordValue.length < 6) {
    passwordError.innerText = "minimum 6 character";
  }
  if (nameValue == "son@gmail" && passwordValue == "secret") {
    window.open("../bank/bank.html");
    flag = 1;
  }

  if (flag == 1) {
    return true;
  } else {
    return false;
  }
}
