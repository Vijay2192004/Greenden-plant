// selecting side Navbar , MenuIcon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")


menuicon.addEventListener("click",function()
{
    sidenav.style.right="0px";
}
)


closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%";
}

)



// ------------------



// Navbar toggle (mobile)
var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function () {
  sidenav.style.right = "0";
});

closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});

// Login & Logout system
const loginLink = document.getElementById("loginLink");
const logoutBtn = document.getElementById("logoutBtn");

function checkLogin() {
  const user = localStorage.getItem("user");
  if (user) {
    loginLink.classList.add("hidden");
    logoutBtn.classList.remove("hidden");
  } else {
    loginLink.classList.remove("hidden");
    logoutBtn.classList.add("hidden");
  }
}

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  alert("You have logged out!");
  checkLogin();
});

// Run check when page loads
checkLogin();
