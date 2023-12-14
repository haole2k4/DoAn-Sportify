var audioPath = "./assets/audio/";
console.log("Hello");
document.getElementById("searchInput").addEventListener("input", function () {
  var searchTerm = this.value.toLowerCase();
  var searchResultsContainer = document.getElementById("searchResults");
  searchResultsContainer.innerHTML = "";

  console.log(getSongs());

  let songsSelected = [];

  if (searchTerm.trim() !== "") {
    getSongs().filter(function (song, index) {
      if (song.name.toLowerCase().includes(searchTerm))
        songsSelected.push({
          id: index,
          name: song.name.toLowerCase(),
          link: audioPath + index + ".mp3"
        });
    });

    console.log(songsSelected);

    songsSelected.forEach(song => {
        let songElement = document.createElement('p');
        songElement.innerHTML = `<a class="searchItem" href="${song.link}" target="_blank">${song.name}</a>`;
        songElement.addEventListener("click", function () {
            playSong(song.id);
        });
        // songListElement.appendChild(songElement);
        searchResultsContainer.appendChild(songElement);
    });

    // songsSelected.forEach(function (song) {
    //   var resultItem = document.createElement("div");
    //   resultItem.className = "searchItem";
    //   resultItem.textContent = song.name;
    //   resultItem.addEventListener("click", function () {
    //     playSong(song.id);
    //   });

    //   searchResultsContainer.appendChild(resultItem);
    // });

    searchResultsContainer.style.display = "block";
  } else {
    searchResultsContainer.style.display = "none";
  }
});

function getSongs() {
  return [
    { id: "song1", name: "abc" },
    { id: "song2", name: "def" },
    { id: "song3", name: "Song 3" },
    { id: "song4", name: "abc 2" }
  ];
}

function playSong(songId) {
  var sound = new Howl({
    src: [audioPath + songId + ".mp3"],
    format: ["mp3"],
    volume: 1.0,
  });

  sound.play();
}
