import React from 'react';

interface SeekBarProps {
  value: number;
  min: number;
  max: number;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setSeekTime: (time: number) => void;
  appTime: number;
}

const Seekbar = ({ value, min, max, onInput, setSeekTime } : SeekBarProps) => {
  // converts the time to format 0:00
  const getTime = (time: number) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className="seekbar-con">
      <p className="time-text">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        onInput={onInput}
        onChange={(event) => setSeekTime(Number(event.target.value))}
        min={min}
        max={max}
        className="range-input player"
      />
      <p className="time-text">{max === 0 ? '0:00' : getTime(max)}</p>
      
    </div>
  );
};

export default Seekbar;
