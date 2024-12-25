         document.addEventListener('DOMContentLoaded', () => {
        const audio = document.getElementById('audio');
        const playPauseButton = document.getElementById('play-pause');
        const progressContainer = document.querySelector('.progress-container');
        const progress = document.getElementById('progress');
    
        let currentTrackIndex = 0;
    const tracks = [
        {
            title: "Song 1",
            artist: "Artist 1",
            src: " audio/song1.mp3"
        },
        {
            title: "Song 2",
            artist: "Artist 2",
            src: "audio/song2.mp3"
        },
        {
            title: "Song 3",
            artist: "Artist 3",
            src: "audio/song3.mp3"
        },
        {
            title: "Song 4",
            artist: "Artist 4",
            src: " audio/song4.mp3"
        },
        {
            title: "Song 5",
            artist: "Artist 5",
            src: "audio/song5.mp3"
        },
        {
            title: "Song 6",
            artist: "Artist 6",
            src: "audio/song6.mp3"
        },
        {
            title: "Song 7",
            artist: "Artist 7",
            src: " audio/song7.mp3"
        },
        {
            title: "Song 8",
            artist: "Artist 8",
            src: "audio/song8.mp3"
        },
        {
            title: "Song 9",
            artist: "Artist 9",
            src: "audio/song9.mp3"
        },
        {
            title: "Song 10",
            artist: "Artist 10",
            src: "audio/song10.mp3"
        },
        {
            title: "Song 11",
            artist: "Artist 11",
            src: "audio/song11.mp3"
        }
    ];
        // Toggle play/pause
        playPauseButton.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playPauseButton.textContent = 'Pause';
            } else {
                audio.pause();
                playPauseButton.textContent = 'Play';
            }
        });
    
        // Update progress bar
        audio.addEventListener('timeupdate', () => {
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            progress.style.width = `${progressPercent}%`;
        });
    
        // Seek audio
        progressContainer.addEventListener('click', (e) => {
            const clickX = e.offsetX;
            const width = progressContainer.clientWidth;
            const duration = audio.duration;
            audio.currentTime = (clickX / width) * duration;
        });
    });