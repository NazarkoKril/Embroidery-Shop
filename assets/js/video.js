document.addEventListener("DOMContentLoaded", function () {
const playButton = document.getElementById('playButton');
const video = document.getElementById('video');
const overlay = document.getElementById('videoOverlay');

// Відтворення відео
playButton.addEventListener('click', () => {
  overlay.style.opacity = '0';
  setTimeout(() => overlay.style.display = 'none', 300);
  video.play();
});

// Зупинка відео при натисканні
video.addEventListener('click', () => {
  if (!video.paused) {
    video.pause();
    overlay.style.display = 'flex';
    setTimeout(() => overlay.style.opacity = '1', 10);
  }
});

});