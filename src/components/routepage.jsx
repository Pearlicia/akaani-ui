import React from 'react'
import Landing from '../pages/Landing';
import Cart from '../pages/Cart';
import { NavLink, Link } from 'react-router-dom'
import {
  Routes,
  Route,
  
} from 'react-router-dom';


const routepage = () => {
  return (
    <div className='flex flex-row'>
      <Link to='/landing'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white mx-5 font-bold py-2 px-4 rounded'> Landing Page </button>

      </Link>
      <Link to='/cart'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> Cart Page </button>

      </Link>
        
    </div>
  )
}

export default routepage
