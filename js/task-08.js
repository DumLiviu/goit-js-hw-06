const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;

  if (!email || !password) {
    alert("Toate campurile trebuie completate!!!");
    return;
  }

  const object = {
    email: email,
    password: password,
  };
  console.log(object);
  e.target.reset();
});
