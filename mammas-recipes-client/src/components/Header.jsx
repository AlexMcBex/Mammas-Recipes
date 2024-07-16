import React from 'react'

export default function Header() {
  return (
      <header className="flex text-white p-0 border-b-4 border-gray-500">
        <div className="bg-green-700 p-4 h-18 w-1/3 text-center">
        <h1 className="text-3xl font-bold">Mamma's Recipes</h1>
        </div>
        <div className="bg-white h-18 w-1/3"></div>
        <div className="bg-red-700 h-18 w-1/3"></div>
      </header>
  )
}