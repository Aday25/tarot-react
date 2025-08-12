import './Candle.css';

export default function Candle() {
  return (
    <div className="candle-container">
      <div className="candle">
        <div className="wax"></div>
        <div className="wick"></div>
        <div className="flame"></div>
        <div className="glow"></div>
      </div>
    </div>
  );
}
