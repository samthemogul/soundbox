import  { useState, useEffect, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextSong, prevSong, playPause } from "../../redux/slices/playerSlice";
import Controls from "./Controls";
import Player from "./Player";
import Seekbar from "./Seekbar";
import Track from "./Track";
import VolumeBar from "./VolumeBar";
import "../../styles/containers/musicplayer.css";
import { RootState } from "../../redux/store";

const MusicPlayer = () => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
      useSelector((state: RootState) => state.player);
  const [duration, setDuration] = useState<number>(0);
  const [seekTime, setSeekTime] = useState<number>(0);
  const [appTime, setAppTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.3);
  const [repeat, setRepeat] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true));
  }, [currentIndex, currentSongs.length, dispatch]);

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(false));

    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };
  return (
    <div className="player-container">
      <div className="player-inner-con">
        <Track
          isPlaying={isPlaying}
          isActive={isActive}
          activeSong={activeSong}
        />
        <div className="player-controls">
          <Controls
            isPlaying={isPlaying}
            isActive={isActive}
            repeat={repeat}
            setRepeat={setRepeat}
            shuffle={shuffle}
            setShuffle={setShuffle}
            currentSongs={currentSongs}
            handlePlayPause={handlePlayPause}
            handlePrevSong={handlePrevSong}
            handleNextSong={handleNextSong}
          />
          <Seekbar
            value={appTime}
            min={0}
            max={duration}
            onInput={(event: ChangeEvent<HTMLInputElement>) => setSeekTime(Number(event.target.value))}
            setSeekTime={setSeekTime}
            appTime={appTime}
          />
          <Player
            activeSong={activeSong}
            volume={volume}
            isPlaying={isPlaying}
            seekTime={seekTime}
            repeat={repeat}
            currentIndex={currentIndex}
            onEnded={handleNextSong}
            onTimeUpdate={(event: React.SyntheticEvent<HTMLAudioElement>) => setAppTime(event.currentTarget.currentTime)}
            onLoadedData={(event: React.SyntheticEvent<HTMLAudioElement>) => setDuration(event.currentTarget.duration)}
          />
        </div>
        <VolumeBar
          value={volume}
          min={0}
          max={1}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setVolume(Number(event.target.value))}
          setVolume={setVolume}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
