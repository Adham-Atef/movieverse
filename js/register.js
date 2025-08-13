let users = JSON.parse(localStorage.getItem("users")) || [];


const form = document.getElementById("register-form")
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordc = document.getElementById("passwordc")
const submit = document.getElementById("submit")
const warn = document.getElementById("warn")


console.log(users)
form.addEventListener("submit", function (event) {
    event.preventDefault();


    if (password.value != passwordc.value) {
        warn.textContent = "confirm password doesn't match"
    } else {
        if (!users.some(function (e) {

            return e.email === email.value.trim()
        })) {

            let ob = {}
            ob.firstname = fname.value
            ob.lastname = lname.value
            ob.email = email.value
            ob.password = password.value
            ob.isAdmin = false;
            users.push(ob)
            localStorage.setItem("users", JSON.stringify(users))
            localStorage.setItem("currentUser", JSON.stringify(ob))
            window.location.href = "/"
        } else {
            event.preventDefault();
            warn.textContent = "email exits"
        }
    }

})

