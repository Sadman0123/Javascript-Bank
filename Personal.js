document.getElementById("login").addEventListener("click", function() {
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const email = emailField.value;
  const password = passwordField.value;

  if (email === "login@gmail.com" && password === "admin") {
    window.location.href = "https://sadman0123.github.io/bankjs/";
  } else {
    alert("Login Failed");
  }
});

