import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import apiUrl from "../apiConfig"
import axios from "axios"

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [error, setError] = useState(null)
  // const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSignIn = async (e) => {
    try {
      setLoading(true)
      const res = await axios.post(`${apiUrl}/token/`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (res.status !== 200) {
        throw new Error(res.data.detail || "An error occurred")
      }

      //  token gets stored in localStorage
      const { access } = res.data
      localStorage.setItem("token", access)

      //   console.log(res.data)
      setError(null)
      setLoading(false)
      navigate("/")
    } catch (err) {
      //   console.log(err)
      setLoading(false)
      setError(err.message)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSignIn()
  }

  return (
<div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
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
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="bg-green-600 text-white p-3 rounded-lg uppercase hover:opacity-80">
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>First time here?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700">Create an account</span>
        </Link>
      </div>
      {error && <p className="text-red-500 font-bold">{error}</p>}
    </div>  )
}
