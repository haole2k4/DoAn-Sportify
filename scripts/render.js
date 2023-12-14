
// -----------  Greeetngs Script -----------
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
let welcomeText = "";
const feedPlaylist = document.querySelectorAll('.feedPlaylist');
const imgSongRender = document.querySelectorAll('.song-image');
const songNameRender = document.querySelectorAll('.song-name');
const songAuthor = document.querySelectorAll('.author');
const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");
const progressSlider = document.getElementById("progressSlider");
const currentTimeElement = document.getElementById("currentTime");
const durationElement = document.getElementById("duration");
var isSeeking = false;
// const playPauseButton = document.querySelector(".btn.playPause");
const playPauseButton = document.querySelectorAll(".btn.playPause");
let backwardButton = document.querySelector('.icones.anterior');
let forwardButton = document.querySelector('.icones.proximo');
const backgroundApp = document.querySelector('#principal');
var buttonVolume = document.querySelector('#button-volume-icon');
var buttonVolumeRange = document.querySelector('.button-volume-range');
const userName = document.querySelector('.userName');

// localStorage.setItem('playlists', JSON.stringify(
//     [
//         {
//             playlistName: 'Your top songs',
//             premiumPlayists: false,
//             songs: [
//                 {
//                     songName: 'Pop mix',
//                     songArtist: 'SHY Martin, Lauv, Sia and more',
//                     songImg: './assets/playlistImage/7.jpeg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//                 {
//                     songName: 'Chill Mix',
//                     songArtist: 'Lauv, Oh Wonder, The Chainsmokers and more',
//                     songImg: './assets/playlistImage/8.jpeg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '2',
//                 },
//                 {
//                     songName: 'Everything goes on',
//                     songArtist: 'Porter Robinson, League of Legends and more',
//                     songImg: './assets/playlistImage/everythingGoesOn.jpg',
//                     backgroundWebColor: '#773de3',
//                     songPath: 'everythingGoesOn',
//                 },
//                 {
//                     songName: 'Latin Mix',
//                     songArtist: 'Timothy Infinite, Shakira and more',
//                     songImg: './assets/playlistImage/10.jpeg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//                 {
//                     songName: 'Hindi Mix',
//                     songArtist: 'Ritviz, Nuclea, Atif Aslam and more',
//                     songImg: './assets/playlistImage/11.jpeg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//                 {
//                     songName: '2010s Mix',
//                     songArtist: 'The Fat Rat, Alan Walker, The Chainsmokers and more',
//                     songImg: './assets/playlistImage/12.jpeg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },

//             ]


//         },
//         {
//             playlistName: 'Recently Played',
//             premiumPlayists: false,
//             songs: [
//                 {
//                     songName: 'sleep deprived',
//                     songArtist: 'i will tell you a story before it tells itself',
//                     songImg: './assets/playlistImage/1.jpeg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//                 {
//                     songName: 'adrenaline rush',
//                     songArtist: 'for the night when you have piled up everything and it is deadline tomorrow',
//                     songImg: './assets/playlistImage/2.jpeg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//                 {
//                     songName: 'impulse',
//                     songArtist: 'the neighbors are gonna call the cops',
//                     songImg: './assets/playlistImage/3.jpeg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//                 {
//                     songName: 'sixth gear',
//                     songArtist: 'nothings gonna stop me now ',
//                     songImg: './assets/playlistImage/4.jpeg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//                 {
//                     songName: '3:14 am',
//                     songArtist: 'and thoughts of past and future kept him awake',
//                     songImg: './assets/playlistImage/5.jpeg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//                 {
//                     songName: 'serenity',
//                     songArtist: 'is it tears or just the pouring rain?',
//                     songImg: './assets/playlistImage/6.jpeg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//             ],
//         },
//         {
//             playlistName: 'Popular New releases',
//             premiumPlayists: false,
//             songs: [
//                 {
//                     songName: 'Celestial',
//                     songArtist: 'Ed',
//                     songImg: './assets/playlistImage/celestial.jpg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//                 {
//                     songName: 'this Is Why',
//                     songArtist: 'Paramore',
//                     songImg: './assets/playlistImage/this is why.jpg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//                 {
//                     songName: 'I GOT ISSUES',
//                     songArtist: 'YG',
//                     songImg: './assets/playlistImage/igotissu.jpg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//                 {
//                     songName: 'uh oh',
//                     songArtist: 'Tate McRae',
//                     songImg: './assets/playlistImage/uhoh.jpg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//                 {
//                     songName: 'Body Paint',
//                     songArtist: 'Arctic Monkeys',
//                     songImg: './assets/playlistImage/bodypaint.jpg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//                 // playlist này chỉ có 5 songs
//             ],
//         },
//         {
//             playlistName: 'Mood',
//             premiumPlayists: true,
//             songs: [
//                 {
//                     songName: 'Mood Booster',
//                     songArtist: 'Get happy with todays dose of feel-good songs!',
//                     songImg: './assets/playlistImage/moodbooster.jpg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//                 {
//                     songName: 'Feeling Good',
//                     songArtist: 'Feel good with this positively timeless playlist!',
//                     songImg: './assets/playlistImage/feelinggood.jpg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//                 {
//                     songName: 'Dark & Stormy',
//                     songArtist: 'Beautifully dark, dramatic tracks.',
//                     songImg: './assets/playlistImage/dark&stormy.jpg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//                 {
//                     songName: 'Feel Good Piano',
//                     songArtist: 'Happy vibes for an upbeat morning.',
//                     songImg: './assets/playlistImage/feelgoodpiano.jpg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//                 {
//                     songName: 'Feeling Myself',
//                     songArtist: 'Art By Laci Jordan; Cover: Lakeyah',
//                     songImg: './assets/playlistImage/feelingmyself.jpg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//                 {
//                     songName: 'Chill Tracks',
//                     songArtist: 'Softer kinda dance.',
//                     songImg: './assets/playlistImage/chilltracks.jpeg',
//                     backgroundWebColor: 'rgb(4, 68, 120)',
//                     songPath: '1',
//                 },
//             ],
//         },
//     ]

// ));




let spotifyApp = {

  currentPlaylist: 0,
  currentSong: 0,


  prevPlaylist: 0,
  prevSong: 0,

  feedPlaylistHeight: '',
  feedPlaylistLiHeight: '',


  isPremium: false,
  isPlaying: false,
  userName: '',



  playlists: [],

  greeting: function () {
    if (hour < 12) welcomeText = welcomeTypes[0];
    else if (hour < 18) welcomeText = welcomeTypes[1];
    else welcomeText = welcomeTypes[2];
    greeting.textContent = welcomeText;
  },

  getUserName: function () {
    let userName = localStorage.getItem('userName');
    if (!userName) {
      userName = 'user';
    }
    return userName;
  },

  getPlaylists: function () {
    let storagePlaylists = JSON.parse(localStorage.getItem('playlists'));
    if (storagePlaylists === null || storagePlaylists.length === 0) {
      storagePlaylists = [
        {
          playlistName: 'Your top songs',
          premiumPlayists: false,
          songs: [
            {
              songName: 'Pop mix',
              songArtist: 'SHY Martin, Lauv, Sia and more',
              songImg: './assets/playlistImage/7.jpeg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
            },
            {
              songName: 'Chill Mix',
              songArtist: 'Lauv, Oh Wonder, The Chainsmokers and more',
              songImg: './assets/playlistImage/8.jpeg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '2',
            },
            {
              songName: 'Everything goes on',
              songArtist: 'Porter Robinson, League of Legends and more',
              songImg: './assets/playlistImage/everythingGoesOn.jpg',
              backgroundWebColor: '#4c1da2',
              songPath: 'everythingGoesOn',
            },
            {
              songName: 'Latin Mix',
              songArtist: 'Timothy Infinite, Shakira and more',
              songImg: './assets/playlistImage/10.jpeg',
              backgroundWebColor: '#773de3',
              songPath: '1',
            },
            {
              songName: 'Hindi Mix',
              songArtist: 'Ritviz, Nuclea, Atif Aslam and more',
              songImg: './assets/playlistImage/11.jpeg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
            },
            {
              songName: '2010s Mix',
              songArtist: 'The Fat Rat, Alan Walker, The Chainsmokers and more',
              songImg: './assets/playlistImage/12.jpeg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
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
              songImg: './assets/playlistImage/1.jpeg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
            },
            {
              songName: 'adrenaline rush',
              songArtist: 'tomorow is deadline so we have to finish quickly',
              songImg: './assets/playlistImage/2.jpeg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
            },
            {
              songName: 'impulse',
              songArtist: 'the neighbors are gonna call the cops',
              songImg: './assets/playlistImage/3.jpeg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
            },
            {
              songName: 'sixth gear',
              songArtist: 'nothings gonna stop me now ',
              songImg: './assets/playlistImage/9.jpeg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
            },
            {
              songName: '3:14 am',
              songArtist: 'and thoughts of past and future kept him awake',
              songImg: './assets/playlistImage/5.jpeg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
            },
            {
              songName: 'serenity',
              songArtist: 'is it tears or just the pouring rain?',
              songImg: './assets/playlistImage/6.jpeg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
            },
          ],
        },
        {
          playlistName: 'Popular New releases',
          premiumPlayists: false,
          songs: [
            {
              songName: 'Celestial',
              songArtist: 'Ed',
              songImg: './assets/playlistImage/celestial.jpg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
            },
            {
              songName: 'this Is Why',
              songArtist: 'Paramore',
              songImg: './assets/playlistImage/this is why.jpg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
            },
            {
              songName: 'I GOT ISSUES',
              songArtist: 'YG',
              songImg: './assets/playlistImage/igotissu.jpg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
            },
            {
              songName: 'uh oh',
              songArtist: 'Tate McRae',
              songImg: './assets/playlistImage/uhoh.jpg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
            },
            {
              songName: 'Body Paint',
              songArtist: 'Arctic Monkeys',
              songImg: './assets/playlistImage/bodypaint.jpg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
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
              songImg: './assets/playlistImage/moodbooster.jpg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
            },
            {
              songName: 'Feeling Good',
              songArtist: 'Feel good with this positively timeless playlist!',
              songImg: './assets/playlistImage/feelinggood.jpg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
            },
            {
              songName: 'Dark & Stormy',
              songArtist: 'Beautifully dark, dramatic tracks.',
              songImg: './assets/playlistImage/dark&stormy.jpg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
            },
            {
              songName: 'Feel Good Piano',
              songArtist: 'Happy vibes for an upbeat morning.',
              songImg: './assets/playlistImage/feelgoodpiano.jpg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
            },
            {
              songName: 'Feeling Myself',
              songArtist: 'Art By Laci Jordan; Cover: Lakeyah',
              songImg: './assets/playlistImage/feelingmyself.jpg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
            },
            {
              songName: 'Chill Tracks',
              songArtist: 'Softer kinda dance.',
              songImg: './assets/playlistImage/chilltracks.jpeg',
              backgroundWebColor: 'rgb(4, 68, 120)',
              songPath: '1',
            },
          ],
        },
      ];
    }
    return storagePlaylists;
  },


  displayUserName: function () {
    this.userName = this.getUserName();
    userName.innerText = this.userName;
  },

  render: function () {
    for (let i = 0; i < this.playlists.length; i++) {
      const h4 = document.createElement("h4");
      h4.classList.add("mb-3");
      h4.innerHTML = `<a href="#"><b>${this.playlists[i].playlistName}</b></a>`;
      const see_all = document.createElement("a");
      see_all.classList.add("see-all");
      see_all.innerText = "SEE-ALL";
      const breakLine = document.createElement("br");
      const breakLine2 = document.createElement("br");
      const unorderedList = document.createElement("ul");
      unorderedList.classList.add("playlists");
      for (let j = 0; j < this.playlists[i].songs.length; j++) {
        const li = document.createElement("li");
        li.innerHTML = `
              <img src="${this.playlists[i].songs[j].songImg}">
              <button type="button" class="btn me-3"><svg role="img" height="24" width="24"
                  viewBox="0 0 24 24">
                  <path
                    d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z">
                  </path>
                </svg></button>
              <span>${this.playlists[i].songs[j].songName}</span>
              <p><br>${this.playlists[i].songs[j].songArtist}</p>
              `;

        unorderedList.appendChild(li);
      }
      feedPlaylist[i].appendChild(h4);
      feedPlaylist[i].appendChild(see_all);
      feedPlaylist[i].appendChild(breakLine);
      feedPlaylist[i].appendChild(breakLine2);
      feedPlaylist[i].appendChild(unorderedList);
    }
  },


  handleEvent: function () {
    const lis = document.querySelectorAll('.feedPlaylist li');
    const _this = this;


    lis.forEach((li) => {
      li.addEventListener('click', () => {
        const ul = li.parentNode;
        const liIndex = Array.from(ul.children).indexOf(li);
        const sectionElement = li.closest('.feedPlaylist');
        const sectionIndex = Array.from(document.querySelectorAll('.feedPlaylist')).indexOf(sectionElement);


        _this.currentPlaylist = sectionIndex;
        _this.currentSong = liIndex;

        backgroundApp.style.backgroundColor = _this.playlists[_this.currentPlaylist].songs[_this.currentSong].backgroundWebColor;
        loadCurrentSong();
        playAudio(_this.playlists[_this.currentPlaylist].songs[_this.currentSong].songPath);
        _this.prevPlaylist = sectionIndex;
        _this.prevSong = liIndex;

      });
    });



    function loadCurrentSong() {
      imgSongRender[0].setAttribute('src', _this.playlists[_this.currentPlaylist].songs[_this.currentSong].songImg);
      imgSongRender[1].setAttribute('src', _this.playlists[_this.currentPlaylist].songs[_this.currentSong].songImg);
      songNameRender[0].innerText = _this.playlists[_this.currentPlaylist].songs[_this.currentSong].songName;
      songNameRender[1].innerText = _this.playlists[_this.currentPlaylist].songs[_this.currentSong].songName;
      songAuthor[0].innerText = _this.playlists[_this.currentPlaylist].songs[_this.currentSong].songArtist;
      songAuthor[1].innerText = _this.playlists[_this.currentPlaylist].songs[_this.currentSong].songArtist;
    }


    function playAudio(audioname) {
      var audioPath = "./assets/audio/" + audioname + ".mp3";

      audioSource.src = audioPath;
      audioPlayer.load();
      togglePlayPause();
    }






    playPauseButton[0].addEventListener('click', function () {
      if (audioPlayer.paused) {
        // Nếu âm thanh đang được tắt, bật nó lên và cập nhật biểu tượng SVG thành biểu tượng pause
        audioPlayer.play();
        playPauseButton[0].innerHTML = '<svg role="img" height="24" width="24" viewBox="0 0 24 24"> <rect width="24" height="24" fill="#fff"></rect> <path d="M6 4h4v16H6zm8 0h4v16h-4z" fill="#000"></path></svg>';
        playPauseButton[1].innerHTML = '<svg role="img" height="24" width="24" viewBox="0 0 24 24"> <rect width="24" height="24" fill="#fff"></rect> <path d="M6 4h4v16H6zm8 0h4v16h-4z" fill="#000"></path></svg>';
      } else {
        // Nếu âm thanh không bị tắt, tắt nó đi và cập nhật biểu tượng SVG thành biểu tượng play
        audioPlayer.pause();
        playPauseButton[0].innerHTML = '<svg role="img" height="24" width="24" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>';
        playPauseButton[1].innerHTML = '<svg role="img" height="24" width="24" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>';

      }
    });
    playPauseButton[1].addEventListener('click', function () {
      if (audioPlayer.paused) {
        // Nếu âm thanh đang được tắt, bật nó lên và cập nhật biểu tượng SVG thành biểu tượng pause
        audioPlayer.play();
        playPauseButton[0].innerHTML = '<svg role="img" height="24" width="24" viewBox="0 0 24 24"> <rect width="24" height="24" fill="#fff"></rect> <path d="M6 4h4v16H6zm8 0h4v16h-4z" fill="#000"></path></svg>';
        playPauseButton[1].innerHTML = '<svg role="img" height="24" width="24" viewBox="0 0 24 24"> <rect width="24" height="24" fill="#fff"></rect> <path d="M6 4h4v16H6zm8 0h4v16h-4z" fill="#000"></path></svg>';
      } else {
        // Nếu âm thanh không bị tắt, tắt nó đi và cập nhật biểu tượng SVG thành biểu tượng play
        audioPlayer.pause();
        playPauseButton[0].innerHTML = '<svg role="img" height="24" width="24" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>';
        playPauseButton[1].innerHTML = '<svg role="img" height="24" width="24" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>';

      }
    });

    progressSlider.addEventListener('input', function () {
      var progress = progressSlider.value / 100;
      if (!isSeeking && isFinite(audioPlayer.duration)) {
        audioPlayer.currentTime = progress * audioPlayer.duration;
      }
      var currentTime = formatTime(audioPlayer.currentTime);
      var duration = formatTime(audioPlayer.duration);

      currentTimeElement.textContent = currentTime;
      durationElement.textContent = duration;
    })


    buttonVolume.addEventListener('click', function () {
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

    })

    buttonVolumeRange.addEventListener('input', function () {
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
    })





    function togglePlayPause() {
      if (audioPlayer.paused) {
        // Nếu âm thanh đang được tắt, bật nó lên và cập nhật biểu tượng SVG thành biểu tượng pause
        audioPlayer.play();
        playPauseButton[0].innerHTML = '<svg role="img" height="24" width="24" viewBox="0 0 24 24"> <rect width="24" height="24" fill="#fff"></rect> <path d="M6 4h4v16H6zm8 0h4v16h-4z" fill="#000"></path></svg>';
        playPauseButton[1].innerHTML = '<svg role="img" height="24" width="24" viewBox="0 0 24 24"> <rect width="24" height="24" fill="#fff"></rect> <path d="M6 4h4v16H6zm8 0h4v16h-4z" fill="#000"></path></svg>';
      } else {
        // Nếu âm thanh không bị tắt, tắt nó đi và cập nhật biểu tượng SVG thành biểu tượng play
        audioPlayer.pause();
        playPauseButton[0].innerHTML = '<svg role="img" height="24" width="24" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>';
        playPauseButton[1].innerHTML = '<svg role="img" height="24" width="24" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>';
      }
    }




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


    // backwardButton and forwardButton


    backwardButton.addEventListener('click', function () {
      _this.currentSong -= 1;
      if (_this.currentSong < 0) {
        _this.currentSong = _this.playlists[_this.currentPlaylist].songs.length - 1;
      }
      backgroundApp.style.backgroundColor = _this.playlists[_this.currentPlaylist].songs[_this.currentSong].backgroundWebColor;
      loadCurrentSong();
      playAudio(_this.playlists[_this.currentPlaylist].songs[_this.currentSong].songPath);


    });

    forwardButton.addEventListener('click', function () {
      _this.currentSong += 1;
      if (_this.currentSong > _this.playlists[_this.currentPlaylist].songs.length - 1) {
        _this.currentSong = 0;
      }
      backgroundApp.style.backgroundColor = _this.playlists[_this.currentPlaylist].songs[_this.currentSong].backgroundWebColor;
      loadCurrentSong();
      playAudio(_this.playlists[_this.currentPlaylist].songs[_this.currentSong].songPath);

    });








    function adjustSize() {
      const width = window.innerWidth;
      if (width >= 1513) {
        _this.feedPlaylistHeight = '330px';
        _this.feedPlaylistLiHeight = '98%';
      } else if ((width >= 796 && width < 1513) || (width >= 521 && width < 769)) {
        _this.feedPlaylistHeight = '660px';
        _this.feedPlaylistLiHeight = '46%';
      } else if (width >= 770 && width < 796 || width < 520) {
        _this.feedPlaylistHeight = '990px';
        _this.feedPlaylistLiHeight = '31%';
      }

      else if (width <= 429) {
        _this.feedPlaylistHeight = '770px';
        _this.feedPlaylistLiHeight = '29%';
      }
    }

    // 1513 -> 1 hàng 330 98
    // 797 -> 1512 2 hàng ngang 660 46
    // 770 -> 796 3 hàng ngang  990 31
    // 521 -> 769 2 hàng ngang mới đủ hiển thị
    //  < 520 3 hàng ngang

    const adjustPlaylist = document.querySelectorAll('.playlists');
    let see_all = document.querySelectorAll('.see-all');
    const isclick = new Array(adjustPlaylist.length).fill(false);


    see_all.forEach((see) => {
      see.addEventListener('click', (event) => {
        const index = Array.from(see_all).indexOf(event.target);
        // console.log(index);
        if (!isclick[index]) {
          adjustSize();
          const li = adjustPlaylist[index].querySelectorAll('li');
          adjustPlaylist[index].style.minHeight = _this.feedPlaylistHeight;
          li.forEach((element) => {
            element.style.height = _this.feedPlaylistLiHeight;
          });
          isclick[index] = true;
        }

        else if (isclick[index]) {
          const li = adjustPlaylist[index].querySelectorAll('li');
          adjustPlaylist[index].style.minHeight = '330px';
          li.forEach((element) => {
            element.style.height = '98%';
          });

          isclick[index] = false;
        }
      });
    });




  },




  start: function () {
    this.playlists = this.getPlaylists();
    this.displayUserName();
    this.greeting();
    this.render();
    this.handleEvent();
  },

}



spotifyApp.start();


