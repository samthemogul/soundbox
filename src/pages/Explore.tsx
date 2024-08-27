import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setActiveSong } from "../redux/slices/playerSlice";
import SearchBar from "../components/SearchBar";
import GenreSelect from "../components/GenreSelect";
import SongCard from "../components/SongCard";
import "../styles/pages/explore.css";
import { TracksDatum } from "../@types/charts-songs";

import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";

interface ITrack {
  id: number;
  title: string;
  artist: string;
  url: string | null;
  image: string;
}
interface Genre {
  id: number;
  name: string;
}

let songs: ITrack[] = [];

const Explore = () => {
  const dispatch = useDispatch();
  const [activeGenre, setActiveGenre] = useState<Genre | null>({
    id: 0,
    name: "All",
  });
  const { data, isLoading, error } = useFetch<TracksDatum[]>(
    "deezer",
    `songs/genre/${activeGenre?.id}`
  );
  const [loadingStatus, setLoadingStatus] = useState<boolean>(isLoading);

  const handleClick = (genre: Genre) => {
    setLoadingStatus(true);
    setActiveGenre(genre);
  };
  useEffect(() => {
    if (error) {
      return;
    }
    if (isLoading) {
      setLoadingStatus(true);
    } else {
      if (data) {
        dispatch(
          setActiveSong({
            song: {
              id: data[0].id,
              title: data[0].title,
              artist: data[0].artist.name,
              url: data[0].preview,
              image: data[0].album.cover,
            },
            i: 0,
            relatedSongs: data,
          })
        );
        songs = data!.map((track) => {
          return {
            id: track.id,
            title: track.title,
            artist: track.artist.name,
            url: track.preview,
            image: track.album.cover,
          };
        });
      }

      setLoadingStatus(false);
    }
  }, [isLoading, data, error, dispatch]);

  return (
    <div>
      <div className="explore-container">
        <SearchBar />
        <div className="explore-header">
          <h1>Explore {activeGenre?.name}</h1>
        </div>
        <GenreSelect activeGenre={activeGenre} handleClick={handleClick} />
        <div className="explore-songs">
          <div className="explore-songs-con">
            {loadingStatus ? (
              <Loader />
            ) : (
              songs!.map((song) => {
                return (
                  <SongCard key={song.id} song={song} relatedSongs={songs} />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
