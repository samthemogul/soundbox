
import '../styles/components/songcard.css'
import { FaPlay, FaPause } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { RootState } from '../redux/store'
import { playPause, setActiveSong } from '../redux/slices/playerSlice'

interface SongCardProps {
    song: {
        id: number
        title: string
        artist: string
        url: string | null
        image: string
    }
    relatedSongs: {
        id: number
        title: string
        artist: string
        url: string | null
        image: string
    }[]

}

const SongCard = ({ song, relatedSongs } : SongCardProps) => {
  const { isActive, isPlaying, activeSong } = useSelector(
    (state: RootState) => state.player
  );
  
  

  const dispatch = useDispatch();

  const handlePlay = () => {
    console.log(song)
    if (activeSong && activeSong!.id == song.id) {
      if (isPlaying) dispatch(playPause(false));
      else dispatch(playPause(true));
      return;
    } else {
      dispatch(
        setActiveSong({
          song: { id: song.id, title: song.title, artist: song.artist, url: song.url, image: song.image },
          i: 0,
          relatedSongs: relatedSongs
        })
      );
      if (isPlaying) dispatch(playPause(false));
      dispatch(playPause(true));
    }

    
  };
  return (
    <div  className='song-card-container'>
      <div>
        <div onClick={handlePlay} className={`song-card-play`}>
          {isActive && activeSong!.id == song.id && isPlaying ? (
            <FaPause className='song-card-play-icon' />
          ) : (
            <FaPlay className='song-card-play-icon' />
          )}
        </div>
      </div>
        <img className='song-image' src={song.image} alt={song.title} />
        <Link to={`/songs/${song.id}`} className='song-title'>{song.title}</Link>
        <p  className='song-artist'>{song.artist}</p>
    </div>
  )
}

export default SongCard