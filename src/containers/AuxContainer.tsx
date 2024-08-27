
import "../styles/containers/auxcontainer.css";

import DashboardTopSong from "../components/DashboardTopSong";
import DashboardTopArtists from "../components/DashboardTopArtists";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { TracksDatum } from "../@types/charts-songs";
import { ArtistElement } from "../@types/charts-songs";
import Loader from "../components/Loader";


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
  const chartsResults = useFetch<TracksDatum[]>(
    "deezer",
    "songs/top"
  );
  const artistsResults = useFetch<ArtistElement[]>(
    "deezer",
    "artists/top"
  );
  const [loadingStatus, setLoadingStatus] = useState<boolean>(chartsResults.isLoading);

  
  useEffect(() => {
    if (chartsResults.isLoading) {
      setLoadingStatus(true);
    } else {
      if (chartsResults.data) {
        topSongs = chartsResults!.data!.map((track) => {
          return {
            position: track.position,
            id: track.id,
            title: track.title,
            artist: track.artist.name,
            url: track.preview,
            image: track.album.cover!,
          }
        })
        
      }
      if (artistsResults.data){
        topArtists = artistsResults!.data!.map((artist) => {
          return {
            id: artist.id,
            name: artist.name,
            image: artist.picture
          }
        })
      }
      
      
      
      setLoadingStatus(false);
    }
  }, [artistsResults, artistsResults.isLoading, chartsResults, chartsResults.isLoading]);
  return (
    <div className="aux-con">
      <div className="aux-header">
          <h2>Top Songs</h2>
          <button>View More</button>
        </div>
      <div className="top-songs">
        <div className="top-songs-con">

        { loadingStatus ? <Loader /> : (
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
        {loadingStatus ? <Loader /> : topArtists!.map((artist: ITopArtist) => {
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
