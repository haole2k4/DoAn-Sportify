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
  //var audioPath = "./assets/audio/1.mp3";
  var audioPath = "./assets/audio/" + audioname + ".mp3";
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















 

//day la script