const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    console.log("kjdbfsjd")
    if (username === "user@user.pt" && password === "web_dev") {
        document.getElementById("modal-close").click();
        alert("You have successfully logged in.");
        localStorage.setItem("userisloggedin", true);
/*         location.reload(); */
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
