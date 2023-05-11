import React from 'react'
import Library from '@/components/layout/library'
import FriendList from '@/components/layout/friend-list'
export default function Home() {
  return (
    <>
    <div className='flex flex-row justify-between w-screen h-screen'>
    <Library />
    <section className='bg-blue-600 w-full h-full'>
    <div>

    </div>
    </section>
    <FriendList />
    </div>
    </>
  )
}
