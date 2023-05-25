
import './App.css'
import Navlink from './Navlink'
import Aboutme from './Aboutme'
import Myeducation from './Myeducation'
import Myskills from './Myskills'
import Contactme from './Contactme'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react'

function App() {
  useEffect(()=>{
    Aos.init({
      duration:1200,
      offset:100,
      disable:"mobile",
    });
  },[]);
  return (
    <>
      <div className=' bg-[#161616] h-[auto] w-[100%]  md:bg-cover bg-cover '>
      
        <BrowserRouter>
       
        <div className='bg-[#161616] h-[auto] w-[100%]'>
        <Navlink/>
    
       
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/aboutme' element={<Aboutme/>}/>
          <Route path='/myeducation' element={<Myeducation/>}/>
          <Route path='/myskills' element={<Myskills/>}/>
          <Route path='/contactme' element={<Contactme/>}/>
             </Routes>
        </div>
        </BrowserRouter>
        
      </div>
    
    
    </>
  )
}

export default App
