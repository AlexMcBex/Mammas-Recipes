import { useEffect, useState } from 'react'
import { apiIndexRecipes } from '../../api/recipes/indexRecipes'
import { jwtDecode } from 'jwt-decode'
import { Link } from 'react-router-dom'

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



  const getBgColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-500'
      case 'Medium':
        return 'bg-yellow-500'
      case 'Hard':
        return 'bg-red-500'
      default:
        return 'bg-gray-100'
    }
  }

  if(localStorage.getItem('token') === null) {
    return (
      <div className="p-5">
        <h1 className="text-3xl font-bold mb-5"> My Recipes</h1>
        <p>Please 
        <Link className="bg-blue-500 text-white p-3 rounded-lg m-1 font-bold" to="/sign-in">Sign In</Link> to view your recipes</p>
      </div>
    )
  }

  return (
    <div className="p-5">
      <div className="flex">
      <h1 className="text-3xl font-bold mb-5"> My Recipes</h1>
      <Link className="bg-blue-500 text-white p-3 rounded-lg m-5 font-bold" to="/recipes/new">New Recipe</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.length === 0 && <p>No recipes found :(</p>}
        {recipes.map((recipe) => (
          <Link 
            to={`/recipes/${recipe.id}`} 
            key={recipe.id} 
            className={`p-4 rounded-lg shadow-md ${getBgColor(recipe.difficulty)}`}>
            <h2 className="text-2xl font-bold mb-2">{recipe.name}</h2>
            <p className="text-gray-700">Prep Time: {recipe.prep_time} minutes</p>
            <p className="text-gray-700">Difficulty: {recipe.difficulty}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}