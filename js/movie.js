function toggleInformation() {
    var infoDiv = document.getElementById("info-content");
    var trailerdiv = document.getElementById("tra-iler");

    if (infoDiv.style.display === "none") {
        infoDiv.style.display = "block";
        trailerdiv.style.display = "none"
    } else {
        infoDiv.style.display = "none";
    }
}
function trailer() {
    var infoDiv = document.getElementById("info-content");
    var trailerdiv = document.getElementById("tra-iler");

    if (trailerdiv.style.display === "none") {
        trailerdiv.style.display = "block";
        infoDiv.style.display = "none"
    } else {
        trailerdiv.style.display = "none";
    }
}
function play() {
    window.location.href = 'inceptionmovie.html';
}

const movies = JSON.parse(localStorage.getItem("movies"))



let index = -1;
const data = localStorage.getItem("movie_ID")

if (data) {
    const ob = JSON.parse(data)
    console.log(ob)
    index = ob["id"]
    console.log(index)

}

document.body.style.backgroundImage = `url('${movies[index]["image"]}')`;


const infoContent = document.getElementById("info-content");

const rating = infoContent.querySelector(".rate").textContent = `${movies[index].rating}`;
const genres = infoContent.querySelector(".genres").textContent = movies[index].genres.join(", ");
const release = infoContent.querySelector(".release").textContent = `${movies[index].releaseDate}`;
const country = infoContent.querySelector(".country").textContent = movies[index].countryOfOrigin.join(", ");
const language = infoContent.querySelector(".language").textContent = movies[index].language.join(", ");
const director = infoContent.querySelector(".director").textContent = `${movies[index].director}`;
const stars = infoContent.querySelector(".stars").textContent = movies[index].stars.join(", ");
const summary = infoContent.querySelector(".summaryText").textContent = `${movies[index].summary}`;
const name = document.getElementById("movie-title").textContent = `${movies[index].name}`;

const description = document.getElementById("description").textContent = `${movies[index].description}`
const movie_genres = document.getElementById("movie-genre").textContent = `${movies[index].genres.join(", ")}`
const movie_name = document.getElementById("movie-release").textContent = `${movies[index].releaseDate}`