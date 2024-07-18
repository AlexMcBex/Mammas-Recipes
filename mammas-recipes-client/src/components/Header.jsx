// import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import {jwtDecode} from 'jwt-decode'

export default function Header({isLoggedIn, setIsLoggedIn}) {
  const handleSignOut = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false) // Update state to reflect logged out status
  }
  // console.log("isLoggedIn: " + isLoggedIn)
  return (
    <header className="border-b-4 border-gray-500 shadow-md" style={{ background: 'linear-gradient(to right, #2f855a 33.33%, #ffffff 33.33%, #ffffff 66.66%, #c53030 66.66%)' }}>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={'/'}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap text-white">
            Mamma's Recipes
          </h1>
        </Link>
        {/* SEARCH BAR */}
        <form
          action=""
          className="bg-slate-200 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            //   NO outline if clicked on + when minimum  small/mobile sm: width becomes 64
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-700" />
        </form>
        <ul className="flex gap-4">
          <Link to={'/about'}>
            <li className='hidden sm:inline text-slate-800 hover:text-yellow-300 font-bold'>About</li>
          </Link>
          <Link to={'/recipes'}>
            <li className='hidden sm:inline text-slate-800 hover:text-yellow-300 font-bold'>Recipes</li>
          </Link>
          {isLoggedIn ? (
            <>
            <li className='hidden sm:inline text-slate-700  font-bold'>Hi, <i>{jwtDecode(localStorage.getItem('token')).username}</i></li>
            <Link to={'/sign-in'}>
            <li className='sm:inline text-slate-800 hover:text-yellow-300 font-bold' onClick={handleSignOut}>Sign out</li>
            </Link>
            </>
          ) : (
            <>
            <Link to={'/sign-in'}>
              <li className='sm:inline text-slate-800 hover:text-yellow-300 font-bold'>Sign in</li>
            </Link>
            <Link to={'/sign-up'}>
              <li className='sm:inline text-slate-800 hover:text-yellow-300 font-bold'>Sign up</li>
            </Link>
            </>
          )}
        </ul>
      </div>
    </header>
  )
}
