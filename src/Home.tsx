import Aboutme from "./Aboutme"
import Contactme from "./Contactme"
import Myeducation from "./Myeducation"
import Myskills from "./Myskills"


const Home = () => {
  return (
    <div className="h-[auto] w-[100%] bg-[#161616]">
       
       
       
       <Aboutme/>
       <div> <h1 className="text-white font-bold text-[40px] flex justify-center mt-[35px] underline">My Education</h1><Myeducation/></div> 
       <div> <h1 className="text-white font-bold text-[40px] flex justify-center mt-[35px] underline ">My Skills</h1><Myskills/></div>
       <div> <h1 className="text-white font-bold text-[40px] flex justify-center mt-[35px] underline">Contact me</h1><Contactme/></div>  
   
    </div>
  )
}

export default Home