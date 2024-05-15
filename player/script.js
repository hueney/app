// Volume Inicial player HTML5
document.getElementById("reproductor").volume = 1;

// Play Pausa
function togglePlayPause() {
  const audio = document.getElementById("reproductor");
  const button = document.getElementById("playPause");

  if (audio.paused) {
    audio.play();
    button.innerHTML = '<i class="fa fa-pause-circle-o"></i>';
    button.classList.add('playing'); // Agregar la clase 'playing'
  } else {
    audio.pause();
    button.innerHTML = '<i class="fa fa-play-circle-o"></i>';
    button.classList.remove('playing'); // Quitar la clase 'playing'
  }
}

const songTitleElement = document.getElementById('songTitle');

const eventSource = new EventSource(`https://api.zeno.fm/mounts/metadata/subscribe/k3bsuhqv8druv?id=${1714692363073}&event=${event}`);

eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);
  const songTitle = data.streamTitle || 'Título desconocido';
  songTitleElement.textContent = songTitle;
};