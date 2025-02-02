const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPLaylist = document.getElementById("result-playlist");

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResult(result))
}

function displayResult(result) {
    resultPLaylist.classList.add("hidden");
    const artistName = document.getElementById("artist-name");
    const artistImage = document.getElementById("artist-img");

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove("hidden");
}

document.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();

    console.log(searchTerm);

    if (searchTerm === "") {
        resultPLaylist.classList.add("hidden");
        resultArtist.classList.remove("hidden");
        return;
    }

    requestApi(searchTerm);
})