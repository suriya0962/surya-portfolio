
import arun from './assets/suryAV.jpeg'
// import Myeducation from './Myeducation'
// import Myskills from './Myskills'
// import Contactme from './Contactme'

const Aboutme = () => { 
  return (
    <>
    <div className='flex place-content-center h-[100vh]  w-[100%]'>
    
      <div className='mt-[50px] font-serif w-[100%] ml-[30px]' data-aos='slide-right' data-aos-delay='1200'>
      
      <div>
      <h1  className='  text-[50px]   text-white font-semibold '>Surya varma</h1>
      <h1 className=' text-white text-[20px] mt-3  '>Junior Front-end developer</h1></div>
      <p className=' md:text-white md:text-[20px] md:mt-3 text'>Hi,i am Surya varma and i am from vizainagaram.<br/>Now i am doing internship in  <a href="https://flyerssoft.com/" className=' text-violet-900 hover:underline'>Flyers soft </a> <br/>
      in front-end development. </p>
     <li className=' text-white text-[20px] mt-3'>Determining the structure and design of web pages.</li>
     <li className=' text-white text-[20px] mt-3'>Ensuring user experience determines design choices.</li>
     <li className=' text-white text-[20px] mt-3'>Developing features to enhance the user experience.</li>
     <li className=' text-white text-[20px] mt-3'>Striking a balance between functional and aesthetic design.</li>            
     </div>
     
      <div> </div>
      
      <img alt='surya' className=' h-[400px]   rounded-full mt-[60px] mr-[100px] ' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"  src={arun}/>
      </div>
      
      </>
  )
}

export default Aboutme