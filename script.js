    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const muteButton = document.getElementById('mute');
    const progress = document.getElementById('progress');
    const volume = document.getElementById('volume');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track- artist');
    const currentTimeDisplay = document.getElementById('current-time');
    const totalDurationDisplay = document.getElementById('total-duration');
    const errorMessage = document.getElementById('error-message');
    
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
    
    function loadTrack(index) {
        const track = tracks[index];
        audio.src = track.src;
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
        audio.load();
    }
    
    function playTrack() {
        if (audio.paused) {
            audio.play();
            playButton.textContent = "Pause";
        } else {
            audio.pause();
            playButton.textContent = "Play";
        }
    }
    
    function updateProgress() {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.value = progressPercent || 0;
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
        totalDurationDisplay.textContent = formatTime(audio.duration);
    }
    
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
    
    function changeTrack(direction) {
        currentTrackIndex += direction;
        if (currentTrackIndex < 0) {
            currentTrackIndex = tracks.length - 1;
        } else if (currentTrackIndex >= tracks.length) {
            currentTrackIndex = 0;
        }
        loadTrack(currentTrackIndex);
        playTrack();
    }
    
    function muteTrack() {
        audio.muted = !audio.muted;
        muteButton.textContent = audio.muted ? "Unmute" : "Mute";
    }
    
    playButton.addEventListener('click', playTrack);
    prevButton.addEventListener('click', () => changeTrack(-1));
    nextButton.addEventListener('click', () => changeTrack(1));
    muteButton.addEventListener('click', muteTrack);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', () => changeTrack(1));
    volume.addEventListener('input', () => {
        audio.volume = volume.value / 100;
    });
    
    loadTrack(currentTrackIndex);