let currentUser = JSON.parse(localStorage.getItem("currentUser"));


if (!currentUser || !currentUser.isAdmin) {
    window.location.href = "/"
}


let movies = JSON.parse(localStorage.getItem("movies")) || [];

function edit(x) {
    console.log(x)
    localStorage.setItem("editID", x)
    window.location.href = "edit.html"
}

function del(x) {
    movies.splice(x, 1)
    reload()
}


document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("movies");
    container.innerHTML = "";
    for (let i = 0; i < movies.length; i++) {
        container.innerHTML += `
                        <div class="movie-card">
                            <img src="${movies[i].image}" alt="${movies[i].name}">
                            <h3>${movies[i].name} (${movies[i].year})</h3>
                            <p>${movies[i].description}</p>
                            <div class="actions">
                                <button class="btn-edit" onclick="edit(${i})">Edit</button>
                                <button class="btn-delete" onclick="del(${i})">Del</button>
                            </div>
                        </div> `;

    }
});


function reload() {
    localStorage.setItem("movies", JSON.stringify(movies))

    let container = document.getElementById("movies");
    container.innerHTML = "";
    for (let i = 0; i < movies.length; i++) {
        container.innerHTML += `
                        <div class="movie-card">
                            <img src="${movies[i].image}" alt="${movies[i].name}">
                            <h3>${movies[i].name} (${movies[i].year})</h3>
                            <p>${movies[i].description}</p>
                            <div class="actions">
                                <button class="btn-edit" onclick="edit(${i})">Edit</button>
                                <button class="btn-delete" onclick="del(${i})">Del</button>
                            </div>
                        </div> `;

    }
}