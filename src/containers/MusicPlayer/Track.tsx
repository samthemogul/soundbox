import React from 'react';
import { songCover } from '../../assets';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="track-container">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} track-img-con`}>
      <img src={activeSong?.image} alt="cover art" className="track-img" />
    </div>
    <div className="track-detail-con">
      <p className="track-title">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="track-subtitle">
        {activeSong?.artist ? activeSong?.artist : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;

// activeSong?.images?.coverart
