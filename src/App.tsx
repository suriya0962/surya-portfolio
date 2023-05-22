
import './App.css'
import Navlink from './Navlink'
import Aboutme from './Aboutme'
import Myeducation from './Myeducation'
import Myskills from './Myskills'
import Contactme from './Contactme'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'

function App() {

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
