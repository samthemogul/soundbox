
import { useRef, useEffect, ReactEventHandler } from "react";

interface ITrack {
  id: number;
  title: string;
  artist: string;
  url: string | null;
  image: string;
}

interface PlayerProps {
  isPlaying: boolean;
  seekTime: number;
  repeat: boolean;
  onLoadedData: ReactEventHandler<HTMLAudioElement>;
  onEnded: ReactEventHandler<HTMLAudioElement>;
  volume: number;
  onTimeUpdate: ReactEventHandler<HTMLAudioElement>;
  activeSong: ITrack | null;
  currentIndex: number;
}

const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
} : PlayerProps) => {
  const ref = useRef<HTMLAudioElement>(null);
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    if(ref.current){
      ref.current!.volume = volume;
    }
    
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    if(ref.current){
      ref.current!.currentTime = seekTime;
    }
  }, [seekTime]);

  if (!activeSong?.url) return null

  return (
    <audio
      src={activeSong!.url}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
