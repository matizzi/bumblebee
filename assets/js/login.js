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

function refresh() {
  localStorage.clear("userisloggedin");
  document.getElementById("logginregis").style.display = "block";
  logoutFunction();
  window.location.href="#home"
  Toastify({
    text: "Logout successful!",
    duration: 3000,
    style: {
      background: "green",
    }
    }).showToast();
}

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if (username === "user" && password === "user") {
        document.getElementById("modal-close").click();
        localStorage.setItem("userisloggedin", true);
        localStorage.setItem("wishlist", "[]");
        document.getElementById("logginregis").style.display = "none";
        logoutFunction();
        Toastify({
          text: "Login successful",
          duration: 3000,
          style: {
            background: "green",
          }
          }).showToast();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

if (localStorage.getItem("userisloggedin")){
  document.getElementById("logginregis").style.display = "none";
  logoutFunction();
}

function wishlist(){
  let generatedHtml="";
  let wishlist=JSON.parse(localStorage.getItem("wishlist"));
  for(experiencia of wishlist){
    generatedHtml+="<li>"+experiencia+"</li>";
  }
  document.getElementById("wishlist").innerHTML=generatedHtml;
}