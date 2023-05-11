import { useState, useRef } from "react";
function SongDetails() {

    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(1);
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handlePlayClick = () => {
        if (playing) {
            audioRef.current.pause();
          } else {
            audioRef.current.play();
          }
          setPlaying(!playing);
    }
  
    function handleLoadedMetadata() {
      setDuration(audioRef.current.duration);
    }
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      }

      function handleVolumeChange(e) {
        setVolume(e.target.value);
        audioRef.current.volume = e.target.value;
      }
    
  
    function handleTimeUpdate() {
      setCurrentTime(audioRef.current.currentTime);
    }
    return <div className="fixed bg-black w-full h-[80px] bottom-0 left-0 z-50 text-white flex flex-row items-center justify-around">
        <div className="flex flex-row items-center">
        <img className="w-[40px] h-[40px] rounded mx-2" src="./amogus.jpg" />
        <p>Song name</p>
        </div>
        <div className="flex flex-col w-[50%]">
      <audio
        ref={audioRef}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        src="./song.mp3"
      />
      <div className="flex items-center mt-2">
  <span className="text-sm font-bold mr-2">{formatTime(currentTime)}</span>
  <input
    className="w-full h-1 bg-gray-300 appearance-none rounded-full focus:outline-none focus:shadow-outline"
    type="range"
    min="0"
    max={duration}
    value={currentTime}
    onChange={(e) => {
      audioRef.current.currentTime = e.target.value;
    }}
  />
  <span className="text-sm font-bold ml-2">{formatTime(duration)}</span>
</div>
    <button onClick={handlePlayClick}>
      {playing ? 'Pause' : 'Play'}
    </button>
    </div>
    <div>
    <input
            className="ml-2"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
    </div>
    </div>
}
export default SongDetails;