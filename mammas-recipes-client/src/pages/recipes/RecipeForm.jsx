import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

export default function RecipeForm() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    prep_time: '',
    difficulty: 'easy',
  })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (id) {
      // Fetch recipe data for editing
      axios.get(`${apiUrl}/recipes/${id}/`)
        .then((res) => {
          setFormData(res.data)
        })
        .catch((err) => {
          setError('Error fetching recipe data')
        })
    }
  }, [id])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
    // console.log(formData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      let res
      formData.prep_time = Number(formData.prep_time)
      console.log(formData)
      if (id) {
        // Update existing recipe
        res = await axios.put(`${apiUrl}/recipes/${id}/`, formData, {
          headers: {
            'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`
          },
        })
      } else {
        // Create new recipe
        res = await axios.post(`${apiUrl}/recipes/`, formData, {
          headers: {
            'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`
          },
        })
      }

      if (res.status !== 200 && res.status !== 201) {
        throw new Error(res.data.detail || 'An error occurred')
      }

      setLoading(false)
      navigate('/recipes')
    } catch (err) {
      setLoading(false)
      setError(err.message)
    }
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        {id ? 'Edit Recipe' : 'Add Recipe'}
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-3 rounded-lg"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Ingredients"
          className="border p-3 rounded-lg"
          id="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Instructions"
          className="border p-3 rounded-lg"
          id="instructions"
          value={formData.instructions}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Prep Time in minutes"
          className="border p-3 rounded-lg"
          id="prep_time"
          value={parseInt(formData.prep_time)}
          onChange={handleChange}
          required
        />
        <select
          id="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <button className="bg-green-600 text-white p-3 rounded-lg uppercase hover:opacity-80">
          {loading ? 'Loading...' : id ? 'Update Recipe' : 'Add Recipe'}
        </button>
      </form>
      {error && <p className="text-red-500 font-bold">{error}</p>}
    </div>
  )
}
