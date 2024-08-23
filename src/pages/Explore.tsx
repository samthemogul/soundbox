import { useEffect, useState } from "react";
import GenreSelect from "../components/GenreSelect";
import SongCard from "../components/SongCard";
import "../styles/pages/explore.css";
import { ChartsRootObject } from "../@types/charts-songs";

import { useFetch } from "../hooks/useFetch";

interface ITrack {
  id: number;
  title: string;
  artist: string;
  url: string | null;
  image: string;
}

let songs: ITrack[]  = [];

const Explore = () => {
  const [activeGenre, setActiveGenre] = useState<string>("Pop");
  const { data, isLoading, error } = useFetch<ChartsRootObject>(
    "deezer",
    `chart/0`
  );
  const [loadingStatus, setLoadingStatus] = useState<boolean>(isLoading);

  const handleClick = (genre: string) => {
    setLoadingStatus(true);
    setActiveGenre(genre);
  };
  useEffect(() => {
    if(error){
      return
    }
    if (isLoading) {
      setLoadingStatus(true);
    } else {
      console.log(data)
      songs = data!.tracks.data.map((track) => {
        return {
          id: track.id,
          title: track.title,
          artist: track.artist.name,
          url: track.preview,
          image: track.album.cover,
        }
      })
      
      setLoadingStatus(false);
    }
  }, [activeGenre, isLoading, data, error]);

  return (
    <div>
      <div className="explore-container">
        <div className="explore-header">
          <h1>Explore {activeGenre}</h1>
        </div>
        <GenreSelect activeGenre={activeGenre} handleClick={handleClick} />
        <div className="explore-songs">
          <div className="explore-songs-con">
            {loadingStatus ? (
              <h1>Loading..</h1>
            ) : (
              songs!.map((song) => {
                return <SongCard key={song.id} song={song} relatedSongs={songs} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
