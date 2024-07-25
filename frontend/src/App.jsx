import './App.css'
import Navbar from './Components/Common/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Home from './Components/Pages/Home'
import Service from './Components/Pages/Service'
import Footer from './Components/Common/Footer'

function App() {

  return (
    <div className='w-full bg-gray-100 text-white'>
    
    <div className=' flex flex-col justify-center items-center'>
      <Navbar/>
    </div>

    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/service' element={<Service />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={ <Contact />} />
    </Routes>


    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default App
