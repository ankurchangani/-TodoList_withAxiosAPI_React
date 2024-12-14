import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div className='w-full h-screen flex justify-center items-center'>

        <Link to="/todo" className='text-white px-4 py-2 bg-blue-500   ' >
            Add Todo 
        </Link>
        </div>
    </>
  )
}

export default Home