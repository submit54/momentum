//const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form");
//const loginInput = loginForm.querySelector("input");
const loginInput = document.querySelector("#login-form input");
//const loginButton = loginForm.querySelector("button");
//const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const logoutBtn = document.querySelector("#logoutBtn");

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    //greeting.innerText = "Hello " + userName;
    paintGreetings(userName);

}
function onLoginBtnClick() {
    const userName = loginInput.value;
    /*if (userName === "") {
        alert("Please write your name");
    } else if (userName.length > 15) {
        alert("Your name is too long!");
    }*/
    //console.dir(loginInput);
}


//loginButton.addEventListener("click", onLoginBtnClick);

logoutBtn.addEventListener("click", onLogoutBtnClick);

function paintGreetings(username) {
    greeting.innerText = `Hello  ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    //logoutBtn.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.style.display = "";
}

function onLogoutBtnClick() {
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(HIDDEN_CLASSNAME);
    logoutBtn.classList.add(HIDDEN_CLASSNAME);
    logoutBtn.style.display = "none";
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginInput.value = "";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.style.display = "none";
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}