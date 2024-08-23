import "../styles/containers/auxcontainer.css";
import { FaPlay, FaPause } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../redux/slices/playerSlice";
import { RootState } from "../redux/store";


interface ITopSong {
  position: number;
  id: number;
  title: string;
  artist: string;
  url: string | null;
  image: string;
}

const DashboardTopSong = ({
  position,
  id,
  title,
  artist,
  url,
  image,
}: ITopSong) => {
  const { isActive, isPlaying, currentIndex, currentSongs } = useSelector(
    (state: RootState) => state.player
  );
  

  const dispatch = useDispatch();

  const handlePlay = () => {
    if (currentIndex == position - 1) {
      if (isPlaying) dispatch(playPause(false));
      else dispatch(playPause(true));
      return;
    }
    
  
    dispatch(
      setActiveSong({
        song: { id, title, artist, url, image },
        i: position - 1,
        relatedSongs: currentSongs
      })
    );
    if (isPlaying) dispatch(playPause(false));
    dispatch(playPause(true));
  };

  return (
    <div className="top-song-container">
      <h2 className="position-text">{position}.</h2>
      <div className="top-song-info">
        <div className="top-song-img-details">
          <img className="top-song-img" src={image} alt="song cover" />
          <div className="top-song-details">
            <h3>{title}</h3>
            <p>{artist}</p>
          </div>
        </div>
        <div>
          <button onClick={handlePlay} className="pause-play-btn">
            {isActive && isPlaying && currentIndex == position - 1 ? (
              <FaPause className="pause-play-icon" />
            ) : (
              <FaPlay className="pause-play-icon" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopSong;
