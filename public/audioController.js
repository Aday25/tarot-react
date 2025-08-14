// Creamos el audio UNA sola vez, fuera de cualquier función
const audio = new Audio("/whispers.mp3");
audio.loop = true;
audio.volume = 0.5;

// Estado inicial de reproducción desde localStorage
let isPlaying = localStorage.getItem("musicPlaying") === "true";

// Si estaba activada antes, reproducir al cargar
if (isPlaying) audio.play().catch(() => {});

// Función para actualizar el icono del botón
const updateButtonUI = () => {
  const btn = document.getElementById("music-toggle");
  if (btn) btn.textContent = isPlaying ? "🔊" : "🔈";
};

// Funciones para controlar la música
const playAudio = () => {
  if (!isPlaying) { // Solo si no estaba sonando
    audio.play().catch(() => {});
    isPlaying = true;
    localStorage.setItem("musicPlaying", true);
    updateButtonUI();
  }
};

const pauseAudio = () => {
  if (isPlaying) { // Solo si estaba sonando
    audio.pause();
    isPlaying = false;
    localStorage.setItem("musicPlaying", false);
    updateButtonUI();
  }
};

// Función para crear el botón
const initMusicButton = (headerRight) => {
  if (document.getElementById("music-toggle")) return; // Evita duplicados

  const btn = document.createElement("button");
  btn.id = "music-toggle";
  btn.className = "music-btn";
  btn.textContent = isPlaying ? "🔊" : "🔈";

  btn.addEventListener("click", () => {
    isPlaying ? pauseAudio() : playAudio();
  });

  headerRight.appendChild(btn);
};

// Detecta cuándo aparece el navbar en el DOM
const waitForNavbar = () => {
  return new Promise((resolve) => {
    const check = setInterval(() => {
      const navbar = document.querySelector(".header-right");
      if (navbar) {
        clearInterval(check);
        resolve(navbar);
      }
    }, 50);
  });
};

// Observa cambios en el DOM para reinsertar el botón si falta
const observer = new MutationObserver(() => {
  const headerRight = document.querySelector(".header-right");
  if (headerRight && !document.getElementById("music-toggle")) {
    initMusicButton(headerRight);
  }
});

observer.observe(document.body, { childList: true, subtree: true });

// Primera carga
document.addEventListener("DOMContentLoaded", async () => {
  const headerRight = await waitForNavbar();
  initMusicButton(headerRight);

  // Evita que los navegadores bloqueen el audio hasta interacción del usuario
  window.addEventListener(
    "pointerdown",
    () => {
      if (isPlaying && audio.paused) audio.play().catch(() => {});
    },
    { once: true }
  );
});
