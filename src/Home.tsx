import Aboutme from "./Aboutme"
import Contactme from "./Contactme"
import Myeducation from "./Myeducation"
import Myskills from "./Myskills"
import Video from "./assets/video.mp4"


const Home = () => {
  return (
<>
    <div>
      <video
      autoPlay={true}
      loop
      muted
      className="relative"
      src={Video}
      ></video> 
    <div className="absolute top-[80px] h-auto w-[100%]">
       <Aboutme/>
       <div> <h1 className="text-white bg-[#161616] font-bold text-[40px] flex justify-center underline">My Education</h1><Myeducation/></div> 
       <div> <h1 className="text-white bg-[#161616]  font-bold text-[40px] flex justify-center  underline ">My Skills</h1><Myskills/></div>
       <div> <h1 className="text-white bg-[#161616]  font-bold text-[40px] flex justify-center underline">Contact me</h1><Contactme/></div>  
       </div>
        
    </div>

    </>
  )
}

export default Home