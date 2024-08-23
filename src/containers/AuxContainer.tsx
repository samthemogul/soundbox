
import "../styles/containers/auxcontainer.css";

import DashboardTopSong from "../components/DashboardTopSong";
import DashboardTopArtists from "../components/DashboardTopArtists";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { ChartsRootObject } from "../@types/charts-songs";


interface ITopSong {
  position: number;
  id: number;
  title: string;
  artist: string;
  url: string | null;
  image: string;
}

export interface ITopArtist {
  id: number;
  name: string;
  image: string;
}

let topSongs: ITopSong[] | undefined = [];

let topArtists: ITopArtist[] | undefined = [];


const AuxContainer = () => {
  const { data, isLoading} = useFetch<ChartsRootObject>(
    "deezer",
    "chart/0"
  );
  const [loadingStatus, setLoadingStatus] = useState<boolean>(isLoading);

  
  useEffect(() => {
    if (isLoading) {
      setLoadingStatus(true);
    } else {
      topSongs = data!.tracks.data.map((track) => {
        return {
          position: track.position,
          id: track.id,
          title: track.title,
          artist: track.artist.name,
          url: track.preview,
          image: track.album.cover!,
        }
      })
      topArtists = data!.artists.data.map((artist) => {
        return {
          id: artist.id,
          name: artist.name,
          image: artist.picture
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

        { loadingStatus ? <h3>Loading...</h3> : (
          topSongs!.map((song: ITopSong) => {
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
          })
        )}
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
