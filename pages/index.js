import React from 'react'
import Library from '@/components/layout/library'
import FriendList from '@/components/layout/friend-list'
import SongDetails from '@/components/layout/song-details';
export default function Home() {
  const dummySongs = [
    {
      id: 1,
      title: 'Song Title 1',
      artist: 'Artist 1',
      album: 'Album 1',
      coverImage: './amogus.jpg',
      previewAudio: 'https://example.com/song1.mp3'
    },
    {
      id: 2,
      title: 'Song Title 2',
      artist: 'Artist 2',
      album: 'Album 2',
      coverImage: './amogus.jpg',
      previewAudio: 'https://example.com/song2.mp3'
    },
    {
      id: 3,
      title: 'Song Title 3',
      artist: 'Artist 3',
      album: 'Album 3',
      coverImage: './amogus.jpg',
      previewAudio: 'https://example.com/song3.mp3'
    }
  ];
  

  return (
    <div className='w-screen h-screen flex flex-col justify-center bg-black'>
    <div className='flex flex-row justify-between w-full h-full pt-[70px] pb-[80px] my-1'>
    <Library />
    <section className='bg-neutral-900 text-white w-full h-full mx-1'>
    <div>
    <ul className='flex flex-row items-center justify-center'>
    {dummySongs.map(track => (
          <li key={track.id}>
            <img className='w-[150px] h-[200px]' src={track.coverImage} alt={track.title} />
            <div>{track.title}</div>
            <div>{track.previewAudio}</div>
          </li>
        ))}
    </ul>
    </div>
    </section>
    <FriendList />
    </div>
    <SongDetails />
    </div>
  )
}
