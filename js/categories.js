

const movies = JSON.parse(localStorage.getItem("movies")) || [];
let categoriesList = [];


function isNotExited(arr, word) {
    let isValid = true;
    for (let i = 0; i < arr.length; i++) {
        if (word === arr[i]) {
            isValid = false;
            break;
        }
    }
    return isValid;
}

Array.from(movies).forEach(function (item) {
    for (let j = 0; j < item.genres.length; j++) {
        if (isNotExited(categoriesList, item.genres[j])) {
            categoriesList.push(item.genres[j]);
        }
    }
})



let container = document.getElementById("movies");
let links = document.querySelectorAll(".nav-links a");


function showMovies(category) {
    container.innerHTML = "";
    for (let i = 0; i < movies.length; i++) {
        for (let j = 0; j < movies[i].genres.length; j++) {
            if (movies[i].genres[j] === category) {
                container.innerHTML += `
                <div class="movie-card">
                    <img src="${movies[i].image}" alt="${movies[i].name}">
                    <h3>${movies[i].name} (${movies[i].year})</h3>
                    <p>${movies[i].description}</p>
                </div>
            `;
            }
        }
    }
}

const list = document.getElementById("list");

for (let i = 0; i < categoriesList.length; i++) {
    list.innerHTML += `<li><a href="#" class="filter">${categoriesList[i]}</a></li>`
    links = document.querySelectorAll(".nav-links a");
}

links.forEach(function (item) {
    item.onclick = function () {
        showMovies(item.textContent);

    }
})


showMovies("Action");
