
import "../styles/containers/auxcontainer.css";

import DashboardTopSong from "../components/DashboardTopSong";
import DashboardTopArtists from "../components/DashboardTopArtists";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { ArtistsRootObject } from "../@types/artists";
import { RootObject } from "../@types/songs";


interface ITopSong {
  position: number;
  id: string;
  title: string;
  artist: string;
  url: string | null;
  image: string;
}

export interface ITopArtist {
  id: string;
  name: string;
  image: string;
}

let topSongs: ITopSong[] | undefined = [];

let topArtists: ITopArtist[] | undefined = [];


const AuxContainer = () => {
  const { data, isLoading, error } = useFetch<RootObject>(
    "spotify",
    `recommendations/?limit=20&seed_genres=pop`
  );
  const results = useFetch<ArtistsRootObject>(
    "spotify",
    "artists/?ids=6JL8zeS1NmiOftqZTRgdTz%2C6jJ0s89eD6GaHleKKya26X%2C1gPhS1zisyXr5dHTYZyiMe%2C7iZtZyCzp3LItcw1wtPI3D"
  );
  const [loadingStatus, setLoadingStatus] = useState<boolean>(isLoading);

  
  useEffect(() => {
    if (isLoading) {
      setLoadingStatus(true);
    } else {
      topSongs = data!.tracks.map((track, i) => {
        return {
          position: ++i,
          id: track.id,
          title: track.name,
          artist: track.artists[0].name,
          url: track.preview_url,
          image: track.album.images[0].url!,
        }
      })
      topArtists = results.data!.artists.map((artist) => {
        return {
          id: artist.id,
          name: artist.name,
          image: artist.images[0].url
        }
      })
      
      
      setLoadingStatus(false);
    }
  }, [ isLoading, data]);
  return (
    <div className="aux-con">
      <div className="aux-header">
          <h2>Top Songs</h2>
          <button>View More</button>
        </div>
      <div className="top-songs">
        <div className="top-songs-con">
        {topSongs!.map((song: ITopSong) => {
          return (
            <DashboardTopSong
            key={song.id}
            position={song.position}
              id={song.id}
              title={song.title}
              artist={song.artist}
              url={song.url}
              image={song.image}
            />
          );
        })}
        </div>
        
        
      </div>

      <div className="aux-header">
          <h2>Top Artists</h2>
          <button>View More</button>
        </div>

        <div className="top-artists">
        <div className="top-artists-con">
        {topArtists!.map((artist: ITopArtist) => {
          return (
            <DashboardTopArtists
            key={artist.id}
              id={artist.id}
              name={artist.name}
              image={artist.image}
            />
          );
        })}
        </div>
        
        
      </div>
    </div>
  );
};

export default AuxContainer;
