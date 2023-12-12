let playlists = [
    {
        playlistName: 'Your top mixes',
        premiumPlayists: false,
        songs: [
            {
                songName: 'Pop mix',
                songArtist: 'SHY Martin, Lauv, Sia and more',
                songImg: './assets/playlistImage/7.jpeg',
                songPath: '',
            },
            {
                songName: 'Chill Mix',
                songArtist: 'Lauv, Oh Wonder, The Chainsmokers and more',
                songImg: './assets/playlistImage/8.jpeg',
                songPath: '',
            },
            {
                songName: 'Moody Mix',
                songArtist: 'Charlie Puth, Oh Wonder, Alec Benjamin and more',
                songImg: './assets/playlistImage/9.jpeg',
                songPath: '',
            },
            {
                songName: 'Latin Mix',
                songArtist: 'Timothy Infinite, Shakira and more',
                songImg: './assets/playlistImage/10.jpeg',
                songPath: '',
            },
            {
                songName: 'Hindi Mix',
                songArtist: 'Ritviz, Nuclea, Atif Aslam and more',
                songImg: './assets/playlistImage/11.jpeg',
                songPath: '',
            },
            {
                songName: '2010s Mix',
                songArtist: 'The Fat Rat, Alan Walker, The Chainsmokers and more',
                songImg: './assets/playlistImage/12.jpeg',
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
                songImg: './assets/playlistImage/1.jpeg',
                songPath: '',
            },
            {
                songName: 'adrenaline rush',
                songArtist: 'for the night when you have piled up everything and it is deadline tomorrow',
                songImg: './assets/playlistImage/2.jpeg',
                songPath: '',
            },
            {
                songName: 'impulse',
                songArtist: 'the neighbors are gonna call the cops',
                songImg: './assets/playlistImage/3.jpeg',
                songPath: '',
            },
            {
                songName: 'sixth gear',
                songArtist: 'nothings gonna stop me now ',
                songImg: './assets/playlistImage/4.jpeg',
                songPath: '',
            },
            {
                songName: '3:14 am',
                songArtist: 'and thoughts of past and future kept him awake',
                songImg: './assets/playlistImage/5.jpeg',
                songPath: '',
            },
            {
                songName: 'serenity',
                songArtist: 'is it tears or just the pouring rain?',
                songImg: './assets/playlistImage/6.jpeg',
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
                songImg: './assets/playlistImage/celestial.jpg',
                songPath: '',
            },
            {
                songName: 'this Is Why',
                songArtist: 'Paramore',
                songImg: './assets/playlistImage/this is why.jpg',
                songPath: '',
            },
            {
                songName: 'I GOT ISSUES',
                songArtist: 'YG',
                songImg: './assets/playlistImage/igotissu.jpg',
                songPath: '',
            },
            {
                songName: 'uh oh',
                songArtist: 'Tate McRae',
                songImg: './assets/playlistImage/uhoh.jpg',
                songPath: '',
            },
            {
                songName: 'Body Paint',
                songArtist: 'Arctic Monkeys',
                songImg: './assets/playlistImage/bodypaint.jpg',
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
                songImg: './assets/playlistImage/moodbooster.jpg',
                songPath: '',
            },
            {
                songName: 'Feeling Good',
                songArtist: 'Feel good with this positively timeless playlist!',
                songImg: './assets/playlistImage/feelinggood.jpg',
                songPath: '',
            },
            {
                songName: 'Dark & Stormy',
                songArtist: 'Beautifully dark, dramatic tracks.',
                songImg: './assets/playlistImage/dark&stormy.jpg',
                songPath: '',
            },
            {
                songName: 'Feel Good Piano',
                songArtist: 'Happy vibes for an upbeat morning.',
                songImg: './assets/playlistImage/feelgoodpiano.jpg',
                songPath: '',
            },
            {
                songName: 'Feeling Myself',
                songArtist: 'Art By Laci Jordan; Cover: Lakeyah',
                songImg: './assets/playlistImage/feelingmyself.jpg',
                songPath: '',
            },
            {
                songName: 'Chill Tracks',
                songArtist: 'Softer kinda dance.',
                songImg: './assets/playlistImage/chilltracks.jpeg',
                songPath: '',
            },
        ],
    },
]

const feedPlaylist = document.querySelectorAll('.feedPlaylist');
function renderPlaylist() {
    for (let i = 0; i < playlists.length; i++) {
        const h4 = document.createElement("h4");
        h4.classList.add("mb-3");
        h4.innerHTML = `<a href="#"><b>${playlists[i].playlistName}</b></a>`;
        const see_all = document.createElement("a");
        see_all.classList.add("see-all");
        see_all.innerText = "SEE-ALL";
        const breakLine = document.createElement("br");
        const breakLine2 = document.createElement("br");
        const unorderedList = document.createElement("ul");
        unorderedList.classList.add("playlists");
        for (let j = 0; j < playlists[i].songs.length; j++) {
            const li = document.createElement("li");
            li.innerHTML = `
        <img src="${playlists[i].songs[j].songImg}">
        <button type="button" class="btn me-3" onclick="playAudio(1)"><svg role="img" height="24" width="24"
            viewBox="0 0 24 24">
            <path
              d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z">
            </path>
          </svg></button>
        <span>${playlists[i].songs[j].songName}</span>
        <p><br>${playlists[i].songs[j].songArtist}</p>
        `;
            unorderedList.appendChild(li);
        }
        feedPlaylist[i].appendChild(h4);
        feedPlaylist[i].appendChild(see_all);
        feedPlaylist[i].appendChild(breakLine);
        feedPlaylist[i].appendChild(breakLine2);
        feedPlaylist[i].appendChild(unorderedList);
    }
}
window.onload = renderPlaylist();