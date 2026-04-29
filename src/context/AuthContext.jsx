import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase"

const AuthContext = createContext()
const auth = getAuth(app)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })

        return () => unsubscribe()
    }, []);

    const value = {
        user,
        setUser,
    };

    return(
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}