import React, { createContext, useState, useEffect, useRef } from 'react';

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const audioRef = useRef(new Audio('/whispers.mp3'));
  const [isPlaying, setIsPlaying] = useState(
    localStorage.getItem('musicPlaying') === 'true'
  );

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0.5;

    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }

    localStorage.setItem('musicPlaying', isPlaying);

    // Primer click para permitir autoplay si bloquea el navegador
    const handleClickAnywhere = () => {
      if (isPlaying && audio.paused) {
        audio.play().catch(() => {});
      }
    };

    window.addEventListener('pointerdown', handleClickAnywhere, { once: true });

    return () => window.removeEventListener('pointerdown', handleClickAnywhere);
  }, [isPlaying]);

  const toggleMusic = () => setIsPlaying((prev) => !prev);

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic }}>
      {children}
    </MusicContext.Provider>
  );
};
