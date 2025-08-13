let users = JSON.parse(localStorage.getItem("users")) || [];


const form = document.getElementById("login-form")
const email = document.getElementById("email")
const password = document.getElementById("password")
const submit = document.getElementById("submit")
const warn = document.getElementById("warn")


form.addEventListener("submit", function (e) {
    event.preventDefault();

    let user;
    if (users.some(function (item) {
        if ((item.email === email.value.trim()) && (item.password === password.value.trim())) {
            user = item
            return true;
        }
        return false;
    })) {
        localStorage.setItem("currentUser", JSON.stringify(user))
        window.location.href = "/"
    } else {

        warn.innerHTML = "email or password may be invalid"

    }
}) 