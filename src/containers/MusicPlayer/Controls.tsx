import { Dispatch, SetStateAction } from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";

interface ITrack {
  id: string;
  title: string;
  artist: string;
  url: string | null;
  image: string;
}

interface ControlsProps {
  isPlaying: boolean;
  isActive: boolean;
  repeat: boolean;
  setRepeat: Dispatch<SetStateAction<boolean>>;
  shuffle: boolean;
  setShuffle: Dispatch<SetStateAction<boolean>>;
  currentSongs: ITrack[];
  handlePlayPause: () => void;
  handlePrevSong: () => void;
  handleNextSong: () => void;
}

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
} : ControlsProps) => (
  <div className="controls-con">
    <BsArrowRepeat
      size={20}
      color={repeat ? "red" : "white"}
      onClick={() => setRepeat((prev) => !prev)}
      className="repeat-icon"
    />
    {currentSongs?.length ? (
      <MdSkipPrevious
        size={30}
        color="#FFF"
        className="previous-icon"
        onClick={handlePrevSong}
      />
    ) : null}
    {isPlaying ? (
      <BsFillPauseFill
        size={40}
        color="#FFF"
        onClick={handlePlayPause}
        className="pause-icon"
      />
    ) : (
      <BsFillPlayFill
        size={40}
        color="#FFF"
        onClick={handlePlayPause}
        className="play-icon"
      />
    )}
    {currentSongs?.length ? (
      <MdSkipNext
        size={30}
        color="#FFF"
        className="next-icon"
        onClick={handleNextSong}
      />
    ) : null }
    <BsShuffle
      size={20}
      color={shuffle ? "red" : "white"}
      onClick={() => setShuffle((prev) => !prev)}
      className="shuffle-icon"
    />
  </div>
);

export default Controls;
