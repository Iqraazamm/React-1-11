import './App.css'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
 const [themeMode,setThemeMode] = useState("light")  //by default theme will be light oky
 const lightTheme = () => {
  setThemeMode("light")
 }
 const darkTheme = () => {
  setThemeMode("dark")
 }
 

 //actual theme change

 useEffect(() => {
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
 }, [themeMode])


  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      {/* <h1>somethin like name n all css stuff */}
      
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      {/* themebtn */}<ThemeBtn/>
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      {/* card */}<Card/>
                       
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}
export default App
