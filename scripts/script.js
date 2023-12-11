// Eable Disable Script
function enabledisable(element) {
  console.log(element.style);
  if (element.style.fill != "rgb(29, 185, 84)") {
    element.style.setProperty("fill", "#1db954");
  } else {
    element.style.setProperty("fill", "#fff");
  }
}

// Greeetngs Script
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
let welcomeText = "";

if (hour < 12) welcomeText = welcomeTypes[0];
else if (hour < 18) welcomeText = welcomeTypes[1];
else welcomeText = welcomeTypes[2];

greeting.innerHTML = welcomeText;

//Scrolling nav bar code
const nav = document.querySelector("#topNav");
const sectionOne = document.querySelector(".fw-bold");
const sectionOneOptions = {};
const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.style.backgroundColor = "black";
    } else {
      nav.style.backgroundColor = "transparent";
    }
  });
},
  sectionOneOptions);
sectionOneObserver.observe(sectionOne);

function playAudio(audioname) {
  //var audioPath = "./mp3/1.mp3";
  var audioPath = "./mp3/" + audioname + ".mp3";
  var audioPlayer = document.getElementById("audioPlayer");
  var audioSource = document.getElementById("audioSource");

  audioSource.src = audioPath;
  audioPlayer.load();
  togglePlayPause();

}

/*===================================================================== VOLUME ================================================================================================ */
// Hàm JavaScript để chuyển đổi tắt/mở âm thanh
function toggleMute() {
  var audioPlayer = document.getElementById("audioPlayer"); // Giả sử phần tử âm thanh của bạn có id là "audioPlayer"
  var volumeIcon = document.getElementById("volume-icon");

  if (audioPlayer.muted) {
    // If audio is currently muted, unmute it
    audioPlayer.muted = false;
    volumeIcon.innerHTML = ' <svg role="presentation" height="16" width="16" aria-label="Volume médio" id="volume-icon" viewBox="0 0 16 16"><path id="volume-path" d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 000-8.474v1.65a2.999 2.999 0 010 5.175v1.649z"></path></svg>';

  } else {
    // If audio is not muted, mute it
    audioPlayer.muted = true;
    volumeIcon.innerHTML = '<svg role="presentation" height="16" width="16" aria-label="Volume muted" id="volume-icon" viewBox="0 0 16 16"><path id="volume-path" d="M1 1.5l13 13M1 14.5l13-13" stroke="#f8f9fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';

  }

}

// Hàm JavaScript để xử lý thay đổi âm lượng
function changeVolume() {
  var audioPlayer = document.getElementById("audioPlayer"); // Giả sử phần tử âm thanh của bạn có id là "audioPlayer"
  var volumeSlider = document.getElementById("volume-slider");
  var volumeIcon = document.getElementById("volume-icon");

  var volumeValue = volumeSlider.value;

  // Cập nhật âm lượng của âm thanh
  audioPlayer.volume = volumeValue;

  // Cập nhật biểu tượng âm lượng dựa trên cấp độ âm lượng hiện tại
  if (volumeValue == 0) {
    volumeIcon.setAttribute("aria-label", "Âm lượng bị tắt");
  } else if (volumeValue < 0.5) {
    volumeIcon.setAttribute("aria-label", "Âm lượng thấp");
  } else {
    volumeIcon.setAttribute("aria-label", "Âm lượng trung bình");
  }
}

/*===================================================================== PLAYER ================================================================================================ */
// Hàm JavaScript để chuyển đổi tắt/mở âm thanh và cập nhật biểu tượng SVG
function togglePlayPause() {
  var audioPlayer = document.getElementById("audioPlayer"); // Giả sử phần tử âm thanh của bạn có id là "audioPlayer"
  var playPauseButton = document.querySelector(".btn.playPause");

  if (audioPlayer.paused) {
    // Nếu âm thanh đang được tắt, bật nó lên và cập nhật biểu tượng SVG thành biểu tượng pause
    audioPlayer.play();
    playPauseButton.innerHTML = '<svg role="img" height="24" width="24" viewBox="0 0 24 24"> <rect width="24" height="24" fill="#fff"></rect> <path d="M6 4h4v16H6zm8 0h4v16h-4z" fill="#000"></path></svg>';
  } else {
    // Nếu âm thanh không bị tắt, tắt nó đi và cập nhật biểu tượng SVG thành biểu tượng play
    audioPlayer.pause();
    playPauseButton.innerHTML = '<svg role="img" height="24" width="24" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>';

  }
}



var audioPlayer = document.getElementById("audioPlayer");
var progressSlider = document.getElementById("progressSlider");
var currentTimeElement = document.getElementById("currentTime");
var durationElement = document.getElementById("duration");

var isSeeking = false;

function updateProgressBar() {
  var progress = progressSlider.value / 100;

  if (!isSeeking && isFinite(audioPlayer.duration)) {
    audioPlayer.currentTime = progress * audioPlayer.duration;
  }

  updateTimeDisplay();
}

function updateTimeDisplay() {
  var currentTime = formatTime(audioPlayer.currentTime);
  var duration = formatTime(audioPlayer.duration);

  currentTimeElement.textContent = currentTime;
  durationElement.textContent = duration;
}

function formatTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);
  return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

// Update progress bar and time display when the audio time changes
audioPlayer.addEventListener("timeupdate", function () {
  if (!isSeeking) {
    var progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressSlider.value = progress;
    updateTimeDisplay();
  }
});

// Event listener for when the user starts dragging the progress slider
progressSlider.addEventListener("input", function (event) {
  event.preventDefault();
  isSeeking = true;
  updateProgressBar();
});

// Event listener for when the user releases the progress slider
progressSlider.addEventListener("change", function () {
  isSeeking = false;
});

// Event listener for the end of seeking (mouseup or touchend)
progressSlider.addEventListener("mouseup", function () {
  isSeeking = false;
});

progressSlider.addEventListener("touchend", function () {
  isSeeking = false;
});










const feedPlaylists = document.querySelectorAll('.feedPlaylist');


const spotifyApp = [

  isPlaying = false,
  isPremium = false,

  playlists = [
    {
      playlistName: 'Your top mixes',
      premiumPlayists: false,
      songs: [
        {
          songName: 'Pop mix',
          songArtist: 'SHY Martin, Lauv, Sia and more',
          songImg: './assets/7.jpeg',
          songPath: '',
        },
        {
          songName: 'Chill Mix',
          songArtist: 'Lauv, Oh Wonder, The Chainsmokers and more',
          songImg: './assets/8.jpeg',
          songPath: '',
        },
        {
          songName: 'Moody Mix',
          songArtist: 'Charlie Puth, Oh Wonder, Alec Benjamin and more',
          songImg: './assets/9.jpeg',
          songPath: '',
        },
        {
          songName: 'Latin Mix',
          songArtist: 'Timothy Infinite, Shakira and more',
          songImg: './assets/10.jpeg',
          songPath: '',
        },
        {
          songName: 'Hindi Mix',
          songArtist: 'Ritviz, Nuclea, Atif Aslam and more',
          songImg: './assets/11.jpeg',
          songPath: '',
        },
        {
          songName: '2010s Mix',
          songArtist: 'The Fat Rat, Alan Walker, The Chainsmokers and more',
          songImg: './assets/12.jpeg',
          songPath: '',
        },

      ]


    },
    {
      playlistName: 'Recently Played',
      premiumPlayists: false,
      songs: [
        {
          songName: 'sleep deprived',
          songArtist: 'i will tell you a story before it tells itself',
          songImg: './assets/1.jpeg',
          songPath: '',
        },
        {
          songName: 'adrenaline rush',
          songArtist: 'for the night when you have piled up everything and it is deadline tomorrow',
          songImg: './assets/2.jpeg',
          songPath: '',
        },
        {
          songName: 'impulse',
          songArtist: 'the neighbors are gonna call the cops',
          songImg: './assets/3.jpeg',
          songPath: '',
        },
        {
          songName: 'sixth gear',
          songArtist: 'nothings gonna stop me now ',
          songImg: './assets/4.jpeg',
          songPath: '',
        },
        {
          songName: '3:14 am',
          songArtist: 'and thoughts of past and future kept him awake',
          songImg: './assets/5.jpeg',
          songPath: '',
        },
        {
          songName: 'serenity',
          songArtist: 'is it tears or just the pouring rain?',
          songImg: './assets/6.jpeg',
          songPath: '',
        },
      ],
    },
    {
      playlistName: 'Popular New releases',
      premiumPlayists: false,
      songs: [
        {
          songName: 'Celestial',
          songArtist: '',
          songImg: './assets/celestial.jpg',
          songPath: '',
        },
        {
          songName: 'this Is Why',
          songArtist: 'Paramore',
          songImg: './assets/this is why.jpg',
          songPath: '',
        },
        {
          songName: 'I GOT ISSUES',
          songArtist: 'YG',
          songImg: './assets/igotissu.jpg',
          songPath: '',
        },
        {
          songName: 'uh oh',
          songArtist: 'Tate McRae',
          songImg: '/assets/uhoh.jpg',
          songPath: '',
        },
        {
          songName: 'Body Paint',
          songArtist: 'Arctic Monkeys',
          songImg: './assets/bodypaint.jpg',
          songPath: '',
        },
        // playlist này chỉ có 5 songs
      ],
    },
    {
      playlistName: 'Mood',
      premiumPlayists: true,
      songs: [
        {
          songName: 'Mood Booster',
          songArtist: 'Get happy with todays dose of feel-good songs!',
          songImg: './assets/moodbooster.jpg',
          songPath: '',
        },
        {
          songName: 'Feeling Good',
          songArtist: 'Feel good with this positively timeless playlist!',
          songImg: './assets/feelinggood.jpg',
          songPath: '',
        },
        {
          songName: 'Dark & Stormy',
          songArtist: 'Beautifully dark, dramatic tracks.',
          songImg: './assets/dark&stormy.jpg',
          songPath: '',
        },
        {
          songName: 'Feel Good Piano',
          songArtist: 'Happy vibes for an upbeat morning.',
          songImg: './assets/feelgoodpiano.jpg',
          songPath: '',
        },
        {
          songName: 'Feeling Myself',
          songArtist: 'Art By Laci Jordan; Cover: Lakeyah',
          songImg: './assets/feelingmyself.jpg',
          songPath: '',
        },
        {
          songName: 'Chill Tracks',
          songArtist: 'Softer kinda dance.',
          songImg: './assets/chilltracks.jpeg',
          songPath: '',
        },
      ],
    },
  ],


  function renderPlaylists() {
    const _this = this; // thay the this
    for (let i = 0; i < feedPlaylists.length; i++) {
      let htmls = _this.playlists[i].map(song => {
        return `<li>
        <img src="${song.songImg}">
        <button type="button" class="btn me-3" onclick="playAudio(1)"><svg role="img" height="24" width="24"
            viewBox="0 0 24 24">
            <path
              d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z">
            </path>
          </svg></button>
        <span>${song.songName}</span>
        <p><br>${song.songArtist}</p>
      </li>`

      }



      )
      feedPlaylists[i].innerHTML = htmls;
    }
  },


  function handleEvent() {

  },

  function startWebMusic() {
    this.renderPlaylists();
  }

]

 
spotifyApp.startWebMusic();

//day la script