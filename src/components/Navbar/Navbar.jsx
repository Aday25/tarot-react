import React from 'react';
import Candle from '../Candle';
import './Navbar.css';

export default function Header({ onRevealClick, onOtherClick }) {
  return (
    <header className="cards-header">
      <div className="candles-wrapper">
        <Candle />
        <h1 className="page-title">El Tarot de las Diosas</h1>
        <Candle />
      </div>

      <div className="header-right">
        <button className="reveal-button" onClick={onRevealClick}>
          Revelar Cartas
        </button>
        <button className="other-button" onClick={onOtherClick}>
          Segunda Parte
        </button>
      </div>
    </header>
  );
}
