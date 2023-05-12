import { useState, useRef, useEffect, useContext } from "react";
function SongDetails({song}) {
  const [volume, setVolume] = useState(50);
  const [currentVolume, setCurrentVolume] = useState(50);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handlePlayClick = () => {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = volume / 100;
        audioRef.current.play();
      }
      setPlaying(!playing);
    };

    useEffect(() => {
        if (song) {
          audioRef.current.play();
          setPlaying(true);
        }
      }, [song]);
  
    function handleLoadedMetadata() {
      setDuration(audioRef.current.duration);
    }
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      }

      const handleVolumeChange = (event) => {
        const value = event.target.value;
        setVolume(value);
        setCurrentVolume(value);
        audioRef.current.volume = value / 100;
      };
      function handleSongChange() {
        setPlaying(false);
        setCurrentTime(0);
        setDuration(0);
      }
      
      useEffect(() => {
        if (song) {
          audioRef.current.play();
          setPlaying(true);
        }
      }, [song]);
    
  
    function handleTimeUpdate() {
      setCurrentTime(audioRef.current.currentTime);
    }
    return <div className="fixed bg-black w-full h-[80px] bottom-0 left-0 z-50 text-white flex flex-row items-center" key={song?.id}>
        <div className="flex flex-row items-center w-[20%]">
        <img className=" w-[80px] h-[80px] p-2 rounded-xl mx-2" src={song?.image}/>
        <div className='whitespace-normal line-clamp-2 text-xs'>
                  <p className='font-bold'>{song?.name}</p>
                  <p className='pt-1 opacity-50'>{song?.artist_name}</p>
                  </div>
        </div>
        <div className="flex flex-col w-[70%] mr-40">
        <audio
          key={song?.id}
          ref={audioRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          src={song?.audio}
          onEnded={handleSongChange}
          value={currentTime}
          onChange={(e) => {
            audioRef.current.currentTime = e.target.value;
          }}
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
            min={0}
            max={100}
            step="1"
            value={volume}
            onChange={handleVolumeChange}
          />
    </div>
    </div>
}
export default SongDetails;