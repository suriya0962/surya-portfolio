
import arun from './assets/suryAV.jpeg'

const Aboutme = () => {
  return (
    <div>
    <div className='flex bg-[#161616] h-[550px] w-[100%] gap-10'>
      <div className=' '>
      <img alt='surya' className='h-82 w-72 rounded-full mt-[60px] ml-40  ' src={arun}/>
      </div>
      <div className='mt-[80px] ml-[80px] transition-transform'>
      <h1  className=' text-white text-[30px] font-semibold'>Surya varma</h1>
      <h1 className=' text-white text-[20px] mt-3'>Junior Front-end developer</h1>
      <p className=' text-white text-[20px] mt-3'>Hi,i am Surya varma and i am from vizainagaram.<br/>Now i am doing internship in  <a href="https://flyerssoft.com/" className=' text-violet-900 hover:underline'>Flyers soft </a> <br/>
      in front-end development. </p>
     <li className=' text-white text-[20px] mt-3'>Determining the structure and design of web pages.</li>
     <li className=' text-white text-[20px] mt-3'>Ensuring user experience determines design choices.</li>
     <li className=' text-white text-[20px] mt-3'>Developing features to enhance the user experience.</li>
     <li className=' text-white text-[20px] mt-3'>Striking a balance between functional and aesthetic design.</li>
        
      
      </div>
      </div>
      </div>
  )
}

export default Aboutme