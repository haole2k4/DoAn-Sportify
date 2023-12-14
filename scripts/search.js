document.getElementById('searchInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        searchSong();
    }
});

function searchSong() {
    var searchTerm = document.getElementById('searchInput').value;
    var audioPath = './assets/audio/';

    // Tạo đối tượng Howl để phát âm thanh
    var sound = new Howl({
        src: [audioPath + searchTerm + '.mp3'], // Giả sử tên file audio giống với giá trị tìm kiếm
        format: ['mp3'],
        volume: 1.0, // Âm lượng (từ 0.0 đến 1.0)
    });

    // Phát âm thanh
    sound.play();
}