

let currentUser = JSON.parse(localStorage.getItem("currentUser"));


if (!currentUser || !currentUser.isAdmin) {
    window.location.href = "/"
}

let movies = JSON.parse(localStorage.getItem("movies"))

const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");
const descriptionInput = document.getElementById("description");
const imageInput = document.getElementById("image");
const ratingInput = document.getElementById("rating");
const dateInput = document.getElementById("date");
const directorInput = document.getElementById("director");
const summaryInput = document.getElementById("summary");

const movieData = [
    nameInput,
    yearInput,
    descriptionInput,
    imageInput,
    ratingInput,
    dateInput,
    directorInput,
    summaryInput
];

const genresInput = document.getElementById("genres");
const countryInput = document.getElementById("country");
const languageInput = document.getElementById("language");
const starInput = document.getElementById("star");

let genresArr = []
let countryArr = []
let languageArr = []
let starArr = []



const pushbtn = document.getElementById("push");
const genresbtn = document.getElementById("genresbtn");
const countrybtn = document.getElementById("countrybtn");
const languagebtn = document.getElementById("languagebtn");
const starbtn = document.getElementById("starbtn");

const addBtns = [
    { button: genresbtn, input: genresInput, array: genresArr },
    { button: countrybtn, input: countryInput, array: countryArr },
    { button: languagebtn, input: languageInput, array: languageArr },
    { button: starbtn, input: starInput, array: starArr }
];

function reloadSpan(ob) {
    ob["button"].nextElementSibling.textContent = ob["array"].join(", ")
}

addBtns.forEach(function (item) {

    reloadSpan(item);

    item["button"].nextElementSibling.nextElementSibling.onclick = function () {
        item["array"].pop();
        reloadSpan(item)
    }

    item["button"].onclick = function () {

        if (item["input"].value) {
            if (item["array"].length) {
                item["button"].nextElementSibling.textContent += ", " + item["input"].value
            } else {
                item["button"].nextElementSibling.textContent += item["input"].value
            }
            item["array"].push(item["input"].value.trim());

        }
        console.log(item["array"])
        item["input"].value = ""
    }
})


pushbtn.onclick = function () {
    let isValid = true;
    movieData.forEach(function (item) {
        if (item.value) {
            let temp = item.value.trim();
            item.value = temp;
        } else {
            console.log(item)
            isValid = false;
        }
    })

    addBtns.forEach(function (item) {
        if (!item["array"].length) {
            isValid = false;
        }
    })

    if (isValid) {
        let new_movie = {}
        new_movie.name = nameInput.value;
        new_movie.year = yearInput.value;
        new_movie.description = descriptionInput.value;
        new_movie.image = imageInput.value;
        new_movie.rating = ratingInput.value + "/10"
        new_movie.genres = genresArr
        new_movie.releaseDate = dateInput.value;
        new_movie.countryOfOrigin = countryArr;
        new_movie.language = languageArr;
        new_movie.director = directorInput.value;
        new_movie.stars = starArr
        new_movie.summary = summaryInput.value;
        movies.push(new_movie);
        localStorage.setItem("movies", JSON.stringify(movies))
        console.log(JSON.parse(localStorage.getItem("movies")))
        nameInput.value = "";
        yearInput.value = "";
        descriptionInput.value = "";
        imageInput.value = "";
        ratingInput.value = "";
        genresArr = [];
        dateInput.value = "";
        countryArr = [];
        languageArr = [];
        directorInput.value = "";
        starArr = [];
        summaryInput.value = "";

        addBtns.forEach(function (item) {
            item["button"].nextElementSibling.textContent = ""
        })

        console.log(new_movie)
        window.alert("Success")

    }
    else {
        window.alert("Wrong")
    }
}



