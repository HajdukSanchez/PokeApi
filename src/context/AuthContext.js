import React, { useState, createContext } from 'react'

export const AuthContext = createContext({
  auth: null,
  login: () => {},
  logout: () => {},
})

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null)

  const login = (user) => setAuth(user)

  const logout = () => setAuth(null)

  const valueContext = {
    auth,
    login,
    logout,
  }

  return <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
}
