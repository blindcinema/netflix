import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { MainProvider } from "./context/Contexts"
// ADD Onclick to every movie to show up on the main 
function App() {
  return (
    <MainProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ MainProvider >
  )
}

export default App
