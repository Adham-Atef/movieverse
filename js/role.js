let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let users = JSON.parse(localStorage.getItem("users"))

if (!currentUser || !currentUser.isAdmin) {
    window.location.href = "/"
}

const form = document.getElementById("form")
const email = document.getElementById("email")
const warn = document.getElementById("warn")
const submit = document.getElementById("submit")
const main = document.getElementById("main")



form.addEventListener("submit", function (e) {
    e.preventDefault();
    let user;
    let index;
    if (users.some(function (item, i) {
        if (item.email === email.value.trim()) {
            index = i;
            user = item
            return true;
        }
        return false;
    })) {
        if (user.isAdmin) {
            warn.style.color = "orange"
            warn.textContent = "Admin Role has been removed !"

            users[index].isAdmin = false;
            localStorage.setItem("users", JSON.stringify(users))
        } else {

            warn.style.color = "green"
            warn.textContent = "Admin Role has been added !"

            users[index].isAdmin = true;
            localStorage.setItem("users", JSON.stringify(users))

        }
    } else {
        warn.style.color = "red"
        warn.textContent = "This email doesn't exit"
    }
})


main.onclick = function () {
    window.location.href = "/"
}