const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const muteButton = document.getElementById('mute');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const currentTimeDisplay = document.getElementById('current-time');
const totalDurationDisplay = document.getElementById('total-duration');
const errorMessage = document.getElementById('error-message');

// Track list
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

let currentTrackIndex = 0;
let isMuted = false;

// Load the first track
loadTrack(currentTrackIndex);

// Function to load a track
function loadTrack(index) {
    if (index < 0 || index >= tracks.length) {
        showError("Track not found.");
        return;
    }
    audio.src = tracks[index].src;
    trackTitle.textContent = tracks[index].title;
    trackArtist.textContent = tracks[index].artist;
    audio.load();
}

// Event listener for when the audio metadata is loaded
audio.addEventListener('loadedmetadata', () => {
    totalDurationDisplay.textContent = formatTime(Math.floor(audio.duration));
});

// Event listener for when the audio ends
audio.addEventListener('ended', () => {
    nextButton.click(); // Automatically play the next track when the current one ends
});

// Play/Pause functionality
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause';
    } else {
        audio.pause();
        playButton.textContent = 'Play';
    }
});

// Previous track
prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
});

// Next track
nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
});

// Mute/Unmute functionality
muteButton.addEventListener('click', () => {
    isMuted = !isMuted;
    audio.muted = isMuted;
    muteButton.textContent = isMuted ? 'Unmute' : 'Mute';
});

// Update progress bar
audio.addEventListener('timeupdate', () => {
    const progressValue = (audio.currentTime / audio.duration) * 100;
    progress.value = progressValue;
    currentTimeDisplay.textContent = formatTime(Math.floor(audio.currentTime));
});

// Seek functionality
progress.addEventListener('input', () => {
    const seekTime = (progress.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Volume control
volume.addEventListener('input', () => {
    audio.volume = volume.value / 100;
});

// Format time for display
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Show error message
function showError(message) {
    errorMessage.textContent = message;
}

// Keyboard shortcuts
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case ' ':
            event.preventDefault();
            playButton.click();
            break;
        case 'ArrowRight':
            nextButton.click();
            break;
        case 'ArrowLeft':
            prevButton.click();
            break;
        case 'm':
            muteButton.click();
            break;
    }
});