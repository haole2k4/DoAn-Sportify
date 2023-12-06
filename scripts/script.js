// Eable Disable Script
function enabledisable(element) {
  console.log(element.style)
  if (element.style.fill != "rgb(29, 185, 84)") {
    element.style.setProperty('fill', '#1db954');
  } else {
    element.style.setProperty('fill', '#fff');
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
const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.style.backgroundColor = "black";
    } else {
      nav.style.backgroundColor = "transparent";
    }
  })
}, sectionOneOptions);
sectionOneObserver.observe(sectionOne);









function playAudio() {
  var audioPath = "./mp3/1.mp3"; // Đường dẫn của file MP3
  var audioPlayer = document.getElementById("audioPlayer");
  var audioSource = document.getElementById("audioSource");

  audioSource.src = audioPath;
  audioPlayer.load(); // Load lại nguồn âm thanh
  audioPlayer.play();
}

var audioPlayer = document.getElementById("audioPlayer"); // Thay thế "audioPlayer" bằng ID của thẻ audio của bạn
var progressSlider = document.getElementById("progressSlider");
var currentTimeElement = document.getElementById("currentTime");
var durationElement = document.getElementById("duration");

var isSeeking = false; // Biến để kiểm tra xem người dùng có đang tua hay không

function updateProgressBar() {
  var progress = progressSlider.value / 100;

  if (!isSeeking) {
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

// Sự kiện để cập nhật thanh trượt và thời gian hiển thị khi thời lượng bài hát thay đổi
audioPlayer.addEventListener("timeupdate", function () {
  if (!isSeeking) {
    var progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressSlider.value = progress;
    updateTimeDisplay();
  }
});

// Sự kiện bắt đầu tua
progressSlider.addEventListener("input", function () {
  isSeeking = true;
  updateProgressBar();
});

// Sự kiện kết thúc tua
progressSlider.addEventListener("change", function () {
  isSeeking = false;
});