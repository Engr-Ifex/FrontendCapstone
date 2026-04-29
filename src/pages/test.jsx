import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // go back to login
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {user?.email}</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;