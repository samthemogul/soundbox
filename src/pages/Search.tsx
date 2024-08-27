import { useEffect, useState } from "react";
import SongCard from "../components/SongCard";
import "../styles/pages/explore.css";
import { TracksDatum } from "../@types/charts-songs";
import Loader from "../components/Loader";

import { useFetch } from "../hooks/useFetch";
import useSearch from "../hooks/useSearch";

interface ITrack {
  id: number;
  title: string;
  artist: string;
  url: string | null;
  image: string;
}

let songs: ITrack[] = [];

const Search = () => {
  const query = useSearch();
  const search = query!.searchText;
  const { data, isLoading, error } = useFetch<TracksDatum[]>(
    "deezer",
    `search/?q=${search}`
  );

  const [loadingStatus, setLoadingStatus] = useState<boolean>(isLoading);

  useEffect(() => {
    console.log(isLoading);
    if (error) {
      return;
    }
    if (isLoading) {
      setLoadingStatus(true);
    } else {
      if (!data) {
        songs = [];
      } else {
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
  }, [data, error, isLoading, search]);

  return (
    <div>
      <div className="explore-container">
        <div className="explore-header">
          <h1>Search Results: {search}</h1>
        </div>
        <div className="explore-songs">
          <div className="explore-songs-con">
            {loadingStatus ? (
              <Loader />
            ) : !loadingStatus && songs.length ? (
              songs!.map((song) => {
                return (
                  <SongCard key={song.id} song={song} relatedSongs={songs} />
                );
              })
            ) : !loadingStatus && !songs.length ? (
              <p>No search results.</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
