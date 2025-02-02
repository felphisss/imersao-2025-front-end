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
    const gridContainer = document.getElementById("grid-container");

    gridContainer.innerHTML = ""

    result.forEach(element => {
        let resultCard = `<div class="artist-card" id="">
                            <div class="card-img">
                                <img id="artist-img" class="artist-img" src="${element.urlImg}" />
                                <div class="play">
                                    <span class="fa fa-solid fa-play"></span>
                                </div>
                            </div>
                            <div class="card-text">
                                <a title="${element.name}" class="vst" href=""></a>
                                <span class="artist-name" id="artist-name">${element.name}</span>
                                <span class="artist-categorie">${element.genre}</span>
                                </a>
                            </div>
                        </div>`
        
        gridContainer.innerHTML += resultCard
    });

    resultArtist.classList.remove("hidden");
}

document.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm === "") {
        resultArtist.classList.add("hidden");
        resultPLaylist.classList.remove("hidden");
        return;
    }

    requestApi(searchTerm);
})