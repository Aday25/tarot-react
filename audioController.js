// Crear el objeto Audio una sola vez
// La ruta debe ser relativa al "base" de GitHub Pages
const audio = new Audio("/tarot-react/whispers.mp3");
audio.loop = true; // Reproducir en bucle
audio.volume = 0.5; // Volumen inicial

// Recuperar estado de reproducción desde localStorage
let isPlaying = localStorage.getItem("musicPlaying") === "true";

// Si estaba sonando antes, reproducir automáticamente al cargar
if (isPlaying) audio.play().catch(() => {});

// Función para actualizar el botón de reproducción
const updateButtonUI = () => {
  const btn = document.getElementById("music-toggle");
  if (btn) btn.textContent = isPlaying ? "🔊" : "🔈";
};

// Función para reproducir audio
const playAudio = () => {
  if (!isPlaying) {
    audio.play().catch(() => {}); // Evitar errores por autoplay
    isPlaying = true;
    localStorage.setItem("musicPlaying", true);
    updateButtonUI();
  }
};

// Función para pausar audio
const pauseAudio = () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    localStorage.setItem("musicPlaying", false);
    updateButtonUI();
  }
};

// Función para crear el botón de reproducción
const initMusicButton = (headerRight) => {
  if (document.getElementById("music-toggle")) return; // Evitar duplicados

  const btn = document.createElement("button");
  btn.id = "music-toggle";
  btn.className = "music-btn";
  btn.textContent = isPlaying ? "🔊" : "🔈";

  // Alternar reproducción al hacer clic
  btn.addEventListener("click", () => {
    isPlaying ? pauseAudio() : playAudio();
  });

  headerRight.appendChild(btn);
};

// Esperar a que el navbar esté disponible en el DOM
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

// Observar cambios en el DOM para reinserción del botón si desaparece
const observer = new MutationObserver(() => {
  const headerRight = document.querySelector(".header-right");
  if (headerRight && !document.getElementById("music-toggle")) {
    initMusicButton(headerRight);
  }
});

observer.observe(document.body, { childList: true, subtree: true });

// Inicialización al cargar la página
document.addEventListener("DOMContentLoaded", async () => {
  const headerRight = await waitForNavbar();
  initMusicButton(headerRight);

  // Algunos navegadores bloquean autoplay: reproducir al primer click
  window.addEventListener(
    "pointerdown",
    () => {
      if (isPlaying && audio.paused) audio.play().catch(() => {});
    },
    { once: true }
  );
});
