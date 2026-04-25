
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Auth from './pages/auth';
import Checkout from './pages/checkut';
import Navbar from './components/navbar.jsx';

function App() {
  return (
      <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      <footer>This is the footer</footer>
      </>
  )
}

export default App
