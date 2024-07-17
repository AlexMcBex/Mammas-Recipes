import { useEffect, useState } from 'react'
import { apiIndexRecipes } from '../api/recipes'

export default function Recipes() {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    apiIndexRecipes()
    .then((res) => {
      setRecipes(res.data)
      // console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div>
      <h1 className='text-3xl bold'>Recipes</h1>
      <ul>
        {recipes.map((recipe) => {
          return <li key={recipe.id}>{recipe.name}</li>
        })}
      </ul>
    </div>
  )
}
