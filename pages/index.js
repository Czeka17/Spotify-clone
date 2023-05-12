import React, { useState, useEffect } from 'react';

import Library from '@/components/layout/library';
import FriendList from '@/components/layout/friend-list';
import SongDetails from '@/components/layout/song-details';
import axios from 'axios';

function HomePage() {
  const [selectedSong, setSelectedSong] = useState(null);
  const [topTracks, setTopTracks] = useState([]);
  const [topAlbums, setTopAlbums] = useState([])

  useEffect(() => {
    const clientId = '5c1875f8';
    const apiUrl = `https://api.jamendo.com/v3.0/tracks/?client_id=${clientId}&format=jsonpretty&limit=20&order=popularity_week`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setTopTracks(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
 
  useEffect(() => {
    const clientId = '5c1875f8';
    const apiUrl = `https://api.jamendo.com/v3.0/tracks/?client_id=${clientId}&format=jsonpretty&limit=20&tags=rock
    `;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setTopAlbums(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSongSelection = (track) => {
    setSelectedSong(track);
  };



  console.log(topAlbums)

  return (
    <div className='w-screen h-screen flex flex-col justify-center bg-black'>
      <div className='flex flex-row justify-between w-full h-full pt-[70px] pb-[80px] my-1'>
        <Library />
        <section className='bg-neutral-900 text-white w-full h-full mx-2 py-2 rounded-lg overflow-auto'>
          <div>
            <h2 className='p-1 m-2 font-bold text-xl'>Recommendations</h2>
            <ul className='flex flex-wrap flex-row items-center justify-center'>
              {topTracks.map(track => (
                <li key={track.id} onClick={() => handleSongSelection(track)} className='m-2 bg-neutral-800 bg-opacity-50 rounded-lg w-[330px] h-[70px] flex flex-row  items-center'>
                  <img className='w-[70px] h-[70px] rounded-l-lg mr-4' src={track.album_image} alt={track.name} />
                  <div className='whitespace-normal line-clamp-2 text-xs'>
                  <p className='font-bold'>{track.name}</p>
                  <p className='pt-1 opacity-50'>{track.artist_name}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ul className='flex flex-wrap flex-row items-center justify-center'>
              {topAlbums.map(track => (
                <li key={track.id} onClick={() => handleSongSelection(track)} className='m-2 bg-neutral-800 bg-opacity-50 rounded-lg w-[330px] h-[70px] flex flex-row  items-center'>
                  <img className='w-[70px] h-[70px] rounded-l-lg mr-4' src={track.image} alt={track.name} />
                  <div className='whitespace-normal line-clamp-2 text-xs'>
                  <p className='font-bold'>{track.name}</p>
                  <p className='pt-1 opacity-50'>{track.artist_name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <FriendList />
      </div>
      <SongDetails song={selectedSong} />
    </div>
  );
}

export default HomePage;
