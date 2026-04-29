import { signOut, getAuth } from "firebase/auth"
import { app } from "../firebase"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const Profile = () => {
  const { user } = useAuth()
  const auth = getAuth(app)
  const navigate = useNavigate()

  const handleLogout = async () => {
    const toastId = toast.loading("Logging out...")

    try {
      await signOut(auth)

      toast.update(toastId, {
        render: "Logged out successfully 👋",
        type: "success",
        isLoading: false,
        autoClose: 2000
      })

      setTimeout(() => {
        navigate("/login")
      }, 2000)

    } catch (error) {
      toast.update(toastId, {
        render: "Logout failed",
        type: "error",
        isLoading: false,
        autoClose: 3000
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100 p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md">
        
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Profile Info
        </h2>

        <div className="space-y-2 text-gray-600">
          <p><span className="font-medium">Email:</span> {user?.email}</p>
          <p><span className="font-medium">User ID:</span> {user?.uid}</p>
        </div>

      </div>

      {/* Tasks Section Placeholder */}
      <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Your Tasks
        </h2>

        <p className="text-gray-500">
          No tasks yet. Start adding tasks 🚀
        </p>
      </div>

      <ToastContainer />
    </div>
  )
}

export default Profile