import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { MainProvider } from "./context/Contexts"
import { AuthContextProvider } from "./context/AuthContext"
import { Login } from "./pages/Login"
import { SignUp } from "./pages/SignUp"
import { Account } from "./pages/Account"
import { ProtectedRoute } from "./components/ProtectedRoute"

function App() {
  return (
    <AuthContextProvider>
      <MainProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={ <Login/>} />
          <Route path="/signup" element={ <SignUp/>} />
          <Route path="/account" element={ <ProtectedRoute> <Account/> </ProtectedRoute> } />
        </Routes>
      </ MainProvider >
    </AuthContextProvider>  
  )
}

export default App
