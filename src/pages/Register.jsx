import React, { useState } from 'react'
import { 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithPopup,
  getAuth 
} from 'firebase/auth'
import { app } from '../firebase'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)

    const toastId = toast.loading("Creating account...")

    try {
      await createUserWithEmailAndPassword(auth, email, password)

      toast.update(toastId, {
        render: "Account created successfully 🎉 Redirecting...",
        type: "success",
        isLoading: false,
        autoClose: 2000
      })

      setTimeout(() => {
        navigate('/login')
      }, 2000)

    } catch (err) {
      let message = "Something went wrong"

      if (err.code === "auth/email-already-in-use") {
        message = "Email already exists"
      } else if (err.code === "auth/weak-password") {
        message = "Password should be at least 6 characters"
      } else if (err.code === "auth/invalid-email") {
        message = "Invalid email address"
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

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider)
      toast.success("Google sign-in successful 🚀")

      setTimeout(() => {
        navigate('/login')
      }, 1500)

    } catch (err) {
      toast.error("Google sign-in failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h1>

        <form onSubmit={handleSignUp} className="space-y-4 mt-6">

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
            className="w-full bg-[#5CBF0D] text-white p-3 rounded-lg hover:bg-[#4da80c]"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow" />
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow" />
        </div>

        <button 
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 border p-3 rounded-lg hover:bg-gray-100"
        >
          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account? 
          <span 
            onClick={() => navigate('/login')} 
            className="text-[#5CBF0D] cursor-pointer ml-1"
          >
            Login
          </span>
        </p>

      </div>

      <ToastContainer />
    </div>
  )
}

export default Register