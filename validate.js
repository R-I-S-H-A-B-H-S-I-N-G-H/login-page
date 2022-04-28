const usernameError = document.querySelector(".usernameerror");
const passError = document.querySelector(".passworderror");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const form = document.querySelector("form");
form.addEventListener("submit", (event) => { 
    if (password.value.length<5||password.value.length>15) { 
        event.preventDefault();
        passError.textContent="Password length must be 5 to 15 letters long."
    }
})
