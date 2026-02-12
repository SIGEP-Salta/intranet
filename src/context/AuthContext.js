"use client"
import { createContext, useContext } from 'react'

const AuthContext = createContext()

export function YearProvider({ children, year }) {
  return <AuthContext.Provider value={year}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
