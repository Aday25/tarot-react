import React, { useContext } from 'react';
import { MusicContext } from '../MusicContext.jsx';

export default function MusicButton() {
  const { isPlaying, toggleMusic } = useContext(MusicContext);

  return (
    <button className="music-btn" onClick={toggleMusic}>
      {isPlaying ? '🔊' : '🔈'}
    </button>
  );
}
