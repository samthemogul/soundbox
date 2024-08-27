import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import { TracksDatum } from "../@types/charts-songs";
import { useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../redux/slices/playerSlice";
import { RootState } from "../redux/store";

import "../styles/pages/songdetail.css";
import SongCard from "../components/SongCard";

interface SongPageResult {
  song: TracksDatum;
  relatedSongs: TracksDatum[];
}

const SongDetails = () => {
  // get id from query params
  const songId = window.location.pathname.split("/")[2];
  // fetch song details
  const { data, isLoading, error } = useFetch<SongPageResult>(
    "deezer",
    `songs/${songId}`
  );
  const { isActive, isPlaying, activeSong} = useSelector(
    (state: RootState) => state.player
  );

  const dispatch = useDispatch();

  const handlePlay = () => {
    if(isPlaying && activeSong!.id == data!.song.id){
      dispatch(playPause(false));
      return;
    }
    dispatch(
      setActiveSong({
        song: {
          id: data!.song.id,
          title: data!.song.title,
          artist: data!.song.artist.name,
          url: data!.song.preview,
          image: data!.song.album.cover,
        },
        i: 0,
        relatedSongs: data!.relatedSongs.map((song) => {
          return {
            id: song.id,
            title: song.title,
            artist: song.artist.name,
            url: song.preview,
            image: song.album.cover,
          };
        }),
      })
    );
    if (isPlaying) dispatch(playPause(false));
    dispatch(playPause(true));
  };
  useEffect(() => {
    console.log(data);
  }, [isLoading, songId]);
  // render song details
  if (isLoading) return <Loader />;
  if (error) return <div>Error Loading song</div>;

  return (
    <div className="song-details-container">
      <div className="songtitle-player">
        <img
          className="song-detail-img"
          src={data!.song.album.cover}
          alt={data!.song.title}
        />
        <div className="song-page-detail">
          <p className="label-detail">Single</p>
          <h1 className="song-detail-title">{data!.song.title}</h1>
          <p className="song-detail-artist"><strong>Artist: </strong>{data!.song.artist.name}</p>
        </div>
        <div>
          <button onClick={handlePlay} className="pause-play-btn">
            {isActive && isPlaying && activeSong!.id == data!.song.id ? (
              <FaPause className="pause-play-icon" />
            ) : (
              <FaPlay className="pause-play-icon" />
            )}
          </button>
        </div>
      </div>
      {/* related songs */}
      <h2 className="detail-header">Other songs by artist</h2>
      <div className="explore-songs">
          <div className="explore-songs-con">
            {isLoading ? (
              <Loader />
            ) : (
              data!.relatedSongs.map((song) => {
                const songDetail = {
                  id: song.id,
                  title: song.title,
                  artist: song.artist.name,
                  url: song.preview,
                  image: song.album.cover,
                }
                const songs = data!.relatedSongs.map((song) => {
                  return {
                    id: song.id,
                    title: song.title,
                    artist: song.artist.name,
                    url: song.preview,
                    image: song.album.cover,
                  };
                })
                return (
                  <SongCard key={song.id} song={songDetail} relatedSongs={songs} />
                );
              })
            )}
          </div>
        </div>
    </div>
  );
};

export default SongDetails;
