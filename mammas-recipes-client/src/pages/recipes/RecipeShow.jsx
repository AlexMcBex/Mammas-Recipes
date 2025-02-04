import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link , useNavigate} from 'react-router-dom'

export default function RecipeShow() {
  const { recipeId } = useParams()
  const [recipe, setRecipe] = useState(null)
//   console.log(recipeId)
const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${apiUrl}/recipes/${recipeId}/`)
      .then((res) => {
        setRecipe(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [recipeId])

  if (!recipe) {
    return <div>Loading...</div>
  }

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

  const handleDelete = async () =>{
    try{
        await axios.delete(`${apiUrl}/recipes/${recipeId}/`)
        navigate('/recipes')
    }catch (err){
        console.log(err)
    }
  }
  return (
    <>
    <div className={`max-w-6xl mx-auto p-4 pb-10 ${getBgColor(recipe.difficulty)} rounded-lg`}>
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <p><strong>Prep Time:</strong> {recipe.prep_time} minutes</p>
      <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
    </div>
    <div className='flex'>
    <Link className="bg-blue-500 text-white p-3 rounded-lg m-5 font-bold" to="/recipes">Back to Recipes</Link>
    <Link className="bg-yellow-700 text-white p-3 rounded-lg m-5 font-bold" to={`/recipes/${recipe.id}/edit`}>Modify Recipe</Link>
    <button className="bg-red-600 text-white p-3 rounded-lg m-5 font-bold" onClick={handleDelete}>Delete Recipe</button>
    </div>
    </>
  )
}
