import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  // Check if the user is authenticated (you'll need to implement this)
  const isLoggedIn = Boolean(localStorage.getItem('token'))

  return (
    <div className="text-center p-10">
      <h1 className="text-5xl font-bold mb-4">Welcome to Mamma's Recipes!</h1>
      <p className="text-xl mb-6">Your personal recipe book awaits.</p>
      {isLoggedIn ? (
        <>
    <Link className="bg-green-500 text-white p-3 rounded-lg m-3 font-bold" to="/recipes">My Recipes</Link>
    <Link className="bg-white text-slate=900 p-3 rounded-lg m-3 font-bold border-2 border-slate-900" to="/recipes/new">New Recipe</Link>
    <Link className="bg-red-500 text-white p-3 rounded-lg m-3 font-bold" to="/about">About</Link>
        </>
      ) : (
        <div>
          
    <Link className="bg-green-500 text-white p-3 rounded-lg m-5 font-bold" to="/sign-in">Sign In</Link>
    <Link className="bg-white text-slate-900 p-3 rounded-lg m-5 font-bold border-2 border-slate-900" to="/sign-up">Sign Up</Link>
     
    <Link className="bg-red-500 text-white p-3 rounded-lg m-5 font-bold" to="/about">About</Link>
        </div>
      )}
    </div>
  )
}
