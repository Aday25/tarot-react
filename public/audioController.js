// Ruta del audio
const audio = new Audio("/whispers.mp3");
audio.loop = true;
audio.volume = 0.5;

// Recuperar estado anterior
let isPlaying = localStorage.getItem("musicPlaying") === "true";

if (isPlaying) {
  audio.play().catch(() => {});
}

// Crear botón
const btn = document.createElement("button");
btn.id = "music-toggle";
btn.textContent = isPlaying ? "🔊" : "🔈";
document.body.appendChild(btn);

// Evento click
btn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play().catch(() => {});
    isPlaying = true;
  }
  btn.textContent = isPlaying ? "🔊" : "🔈";
  localStorage.setItem("musicPlaying", isPlaying);
});

// Intento de reproducción al primer click en cualquier parte
window.addEventListener("pointerdown", () => {
  if (isPlaying && audio.paused) {
    audio.play().catch(() => {});
  }
}, { once: true });
