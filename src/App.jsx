import './App.css';
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom';
import Signup from './Pages/Auth/Signup';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/auth/signup' element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
