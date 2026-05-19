import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-gray-200 p-6">
      
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full text-center">

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome 👋
        </h1>

        <p className="text-gray-600 mb-8">
          Organize your daily tasks and stay productive.
        </p>

        <div className="flex gap-4 justify-center">

          {/* Login Button */}
          <Link to="/login">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300">
              Login
            </button>
          </Link>

          {/* Signup Button */}
          <Link to="/register">
            <button className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-xl font-semibold transition duration-300">
              Sign Up
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Home;