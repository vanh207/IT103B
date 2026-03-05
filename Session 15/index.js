const formElement = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let user = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  console.log("user ", user);
});
