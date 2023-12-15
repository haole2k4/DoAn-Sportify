let userName = '';
let playlists = [];
// const userNameDisplay = document.querySelector('.userName');
// let valueSearchInput = document.getElementById("searchInput").value;
let searchResult = document.querySelector('.playlists');

function getUserName() {
    let userName = localStorage.getItem('userName');
    if (!userName) {
        userName = 'user';
    }
    return userName;
}

function getPlaylists() {
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
}




playlists = getPlaylists();
userName = getUserName();


userNameDisplay.innerText = userName;




function searchBySongName() {
    let valueSearchInput = document.getElementById("searchInput").value;
    let searchResult = document.querySelector('.playlists');


    let filteredPlaylists = playlists.filter(playlist => {
        let filteredSongs = playlist.songs.filter(song => song.songName.toLowerCase().includes(valueSearchInput.toLowerCase()));
        if (filteredSongs.length > 0) {
            playlist.songs = filteredSongs;
            return true;
        }
        return false;
    });


    console.log(filteredPlaylists);

    searchResult.innerHTML = '';
    if (filteredPlaylists.length === 0) {
        searchResult.innerHTML = `
        <li>
            <img src="./assets/error.png">
            <button type="button" class="btn me-3"><svg role="img" height="24" width="24" viewBox="0 0 24 24">
                <path
                    d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z">
                </path>
            </svg></button>
            <span>Result</span>
            <p><br>Khong tim thay</p>
        </li>
        
        `;
    } else {
        for (let i = 0; i < filteredPlaylists.length; i++) {
            for (let j = 0; j < filteredPlaylists[i].songs.length; j++) {
                let songResult = document.createElement('li');
                songResult.innerHTML = `
                    <img src="${filteredPlaylists[i].songs[j].songImg}">
                    <button type="button" class="btn me-3"><svg role="img" height="24" width="24" viewBox="0 0 24 24">
                        <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z">
                        </path>
                    </svg></button>
                    <span>${filteredPlaylists[i].songs[j].songName}</span>
                    <p><br>${filteredPlaylists[i].songs[j].songArtist}</p>
                `;

                searchResult.appendChild(songResult);
            }
        }

    }
}


