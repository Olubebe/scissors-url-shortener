import {Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { AuthContextProvider } from "./components/Context/AuthContext";
import HeroSection from './components/HeroSection/HeroSection'
import FreeDemo from './components/FreeDemo/FreeDemo'
import SignIn from './components/Login/SignIn'
import SignUp from './components/Login/SignUp'
import { ThemeProvider } from '@mui/material'
import ProtectedRoute from './components/Login/ProtectedRoute';
import theme from './components/FreeDemo/components/theme'
import LinkRedirected from './components/FreeDemo/components/index';

function App() {
 

  return (
    <div className="font-sans">
    <AuthContextProvider>
     <ThemeProvider theme={theme}>
      <Routes>
      <Route path='/' element={<HeroSection/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="/free-demo" element={
        <ProtectedRoute>
        <FreeDemo />
        </ProtectedRoute>
        }/>
      <Route path="/:shortUrl" element={<LinkRedirected />} />

      </Routes>
    
    </ThemeProvider>
    </AuthContextProvider>
    </div>
  )
}

export default App
