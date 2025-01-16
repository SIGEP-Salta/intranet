"use client"
import { createContext, useContext } from 'react'

const YearContext = createContext()

export function YearProvider({ children, year }) {
  return <YearContext.Provider value={year}>{children}</YearContext.Provider>
}

export function useYear() {
  return useContext(YearContext)
}
