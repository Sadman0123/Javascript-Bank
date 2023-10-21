document.getElementById("login").addEventListener("click", function() {
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const email = emailField.value;
  const password = passwordField.value;

  if (email === "login@gmail.com" && password === "admin") {
    window.location.href = "http://127.0.0.1:5500/Bank/Bank.html";
  } else {
    alert("Login Failed");
  }
});

