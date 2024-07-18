import { useEffect, useState } from 'react'
import { apiIndexRecipes } from '../../api/recipes/indexRecipes'
import { jwtDecode } from 'jwt-decode'

export default function RecipesIndex() {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    apiIndexRecipes()
    .then((res) => {
      const user = jwtDecode(localStorage.getItem('token'))
      const recipeList = res.data.filter((recipe) => recipe.user ===  user.user_id)
      setRecipes(recipeList)
      console.log(recipeList)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div>
      <h1 className='text-3xl bold'>Recipes</h1>
      <ul>
        {recipes.length < 1 && <li>No recipes yet</li>}
        {recipes.map((recipe) => {
          return <li key={recipe.id}>{recipe.name}</li>
        })}
      </ul>
    </div>
  )
}