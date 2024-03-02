import { createContext, useContext, useEffect, useState } from "react"
import { LogIn, Logout } from "./functions/Auth/auth"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase/firebase"
const Context = createContext()

export const useContextbridge = () => {
    const context = useContext(Context)
    if (!context) throw new Error('There is no Auth provider')
    return context
}

export function ProviderContext({ children }) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [User, setUser] = useState(null)

    const handleLogin = (user) => {
      LogIn(user)
    }

    const handleLogout = () => {
        Logout(setUser)
    }

    return(
        <Context.Provider value={
            {
                handleLogin,
                User,
                handleLogout
            }
        }>
            {children}
        </Context.Provider>
    )
}