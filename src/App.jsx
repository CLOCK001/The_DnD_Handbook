import Landing from "./pages/Landing"
import Home from "./pages/Home"
import Info from "./pages/Info"
import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect } from "react"

function App() {
  const navigation = useNavigate()

  useEffect(() => {
    navigation("/Landing")
  }, [])
  
  return (
      <Routes>
        <Route path="/Landing" element={<Landing/>} />
        <Route path="/Home/:book" element={<Home/>} />
        <Route path="/Info/:api/:catagory/:index" element={<Info/>} />
      </Routes>
  )
}

export default App
