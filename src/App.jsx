import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import Main from './components/Main'


function App() {
  return (
   <div className=''>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/main' element={<Main/>}/>
    </Routes>
   </div>
  )
}

export default App
