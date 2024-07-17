import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch} from 'react-icons/fa'

export default function Header() {
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
        <Link to={'/'}>
            <li className='hidden sm:inline text-slate-200 hover:text-white font-bold'>Home</li>
        </Link>
        <Link to={'/about'}>
            <li className='hidden sm:inline text-slate-200 hover:text-white font-bold'>About</li>
        </Link>
        <Link to={'/recipes'}>
            <li className='hidden sm:inline text-slate-200 hover:text-white font-bold'>Recipes</li>
        </Link>
        <Link to={'/sign-in'}>
            <li className=' sm:inline text-slate-200 hover:text-white font-bold'>Sign in</li>
        </Link>
        </ul>
      </div>
  </header>
  )
}