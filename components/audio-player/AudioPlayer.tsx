import { useRef, useState } from "react";
import styles from "./AudioPlayer.module.scss";

type AudioPlayerProps = {
  audio: string;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audio }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current === null) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <audio ref={audioRef}>
        <source src={audio} type="audio/mpeg" />
      </audio>
      <div onClick={togglePlay} className={styles.togglePlay}>
        {isPlaying ? "pause" : "play"}
      </div>
    </>
  );
};

export default AudioPlayer;
