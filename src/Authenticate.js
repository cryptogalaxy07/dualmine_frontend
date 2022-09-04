import { createContext, useEffect, useState } from "react";
import api from './utils/api';
import JwtDecode from "jwt-decode"
import { getStoredAuthToken } from "./utils/authToken";

export const AuthContext = createContext({
    isLogin: false,
    setLogin: null,
    user: {},
    setUser: null
});

const AuthProvider = ({ children }) => {

    const [isLogin, setLogin] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {

        const token = getStoredAuthToken()
        console.log(token)
        const getUser = async (token) => {
            if (token) {
                try {
                const result = await api.post('/verify-token')
                setLogin(true)
                const oldUser = JwtDecode(token)
                setUser(oldUser)
                console.log(oldUser)
                
                }
                catch {
                return false;
                }
            } else {
                return false;
            }
        }

        getUser(token)

    }, [])

    return (
        <AuthContext.Provider value={{
            isLogin,
            setLogin,
            user,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider