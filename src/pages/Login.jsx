import React, { useState } from 'react'
import { 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth
} from "firebase/auth"
import { app } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    const toastId = toast.loading('Logging in...')

    try {
      await signInWithEmailAndPassword(auth, email, password)

      toast.update(toastId, {
        render: "Logged in successfully 🎉 Redirecting...",
        type: "success",
        isLoading: false,
        autoClose: 2000
      })

      setTimeout(() => {
        navigate('/dashboard')
      }, 2000)

    } catch (err) {
      let message = "Something went wrong"

      if (err.code === "auth/user-not-found") {
        message = "User not found"
      } else if (err.code === "auth/wrong-password") {
        message = "Incorrect password"
      }

      toast.update(toastId, {
        render: message,
        type: "error",
        isLoading: false,
        autoClose: 3000
      })
    } finally {
      setLoading(false)
    }
  }

  // 🔹 Google Login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider)
      toast.success("Google login successful 🚀")

      setTimeout(() => {
        navigate('/dashboard')
      }, 1500)
    } catch (err) {
      toast.error("Google login failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Login to your account
        </p>

        <form onSubmit={handleLogin} className="space-y-4">

          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#5CBF0D]"
          />

          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#5CBF0D]"
          />

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#5CBF0D] text-white p-3 rounded-lg hover:bg-[#4da80c] font-semibold"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow" />
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow" />
        </div>

        {/* Google Button */}
        <button 
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border p-3 rounded-lg hover:bg-gray-100"
        >
          <img 
            src="https://www.svgrepo.com/show/475656/google-color.svg" 
            alt="google" 
            className="w-5 h-5"
          />
          Continue with Google
        </button>

      </div>

      <ToastContainer />
    </div>
  )
}

export default Login