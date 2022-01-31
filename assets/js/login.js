const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

function logoutFunction() {
    var x = document.getElementById("logoutaccount");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function refresh(){
localStorage.clear("userisloggedin");
document.getElementById("logginregis").style.display = "block";
logoutFunction();
alert("You have successfully logged out.");
/* window.location.reload("Refresh"); */
}

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if (username === "user@user.pt" && password === "web_dev") {
        document.getElementById("modal-close").click();
        alert("You have successfully logged in.");
        localStorage.setItem("userisloggedin", true);
        document.getElementById("logginregis").style.display = "none";
        logoutFunction();
/*         location.reload(); */
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})