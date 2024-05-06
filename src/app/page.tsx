import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

function page() {

  return (
    <main className='flex justify-center items-center '>
      <Link href="/identifier" className=" text-3xl font-bold hover:text-blue-800 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-600">Click Here to find Out the Identity</Link>
    </main>
  )
}

export default page