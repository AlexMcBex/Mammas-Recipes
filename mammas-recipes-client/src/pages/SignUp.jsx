import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import apiUrl from "../apiConfig"
import axios from "axios"

export default function SignUp({isLoggedIn, setIsLoggedIn}) {
  
  const navigate = useNavigate()
  
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/")
    }
  }, [isLoggedIn, navigate])

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const res = await axios.post(`${apiUrl}/register/`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (res.status !== 201) {
        throw new Error(res.data.detail || "An error occurred")
      }
      
      //   console.log(res.data)
      setSuccess("User registered successfully")
      setError(null)
      setLoading(false)
      navigate("/sign-in")
    } catch (err) {
      //   console.log(err)
      setSuccess(null)
      setLoading(false)
      setError(err.message)
    }
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="bg-green-600 text-white p-3 rounded-lg uppercase hover:opacity-80">
         {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
      {error && <p className="text-red-500 font-bold">{error}</p>}
      {success && <p className="text-green-500 font-bold">{success}</p>}
    </div>
  )
}
