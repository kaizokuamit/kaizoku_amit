const musicTracks = document.querySelectorAll('.music-track');
const musicPlayer = document.getElementById('musicPlayer');
const buttonSoundPlayer = document.getElementById('buttonSoundPlayer');
const mainVideo = document.getElementById('mainVideo');
const allButtons = document.querySelectorAll('.button');
const soundButtons = document.querySelectorAll('.sound-button'); // Only 4 buttons

// 🎵 Hover preview music
musicTracks.forEach(track => {
  track.addEventListener('mouseenter', () => {
    musicPlayer.src = track.dataset.src;
    musicPlayer.play();
    mainVideo.pause();
  });

  track.addEventListener('mouseleave', () => {
    musicPlayer.pause();
    musicPlayer.currentTime = 0;
    mainVideo.play();
  });
});

// 🔇 Pause/resume video on hover over any button
allButtons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    mainVideo.pause();
  });

  button.addEventListener('mouseleave', () => {
    mainVideo.play();
  });
});

// ✅ Play sound ONLY on click for 4 main buttons
soundButtons.forEach(button => {
  button.addEventListener('click', () => {
    const soundSrc = button.getAttribute('data-sound');
    const audio = new Audio(soundSrc);
    audio.play();
  });
});

// ▶️ Allow video autoplay after user interaction
window.addEventListener('click', () => {
  mainVideo.play().catch(err => console.log("Autoplay failed: ", err));
}, { once: true });
