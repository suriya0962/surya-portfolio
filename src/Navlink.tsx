
import {Link} from 'react-router-dom'
// import Aboutme from './Aboutme'


const Port = () => {
  return (
    <div>
      <div className='flex md:justify-between  bg-black font-semibold h-auto w-[100%]'>
      <div className='flex mt-2'>
        <img src='https://www.sportingvote.com/wp-content/uploads/2018/06/cropped-sv_logo_large-1.png' className='md:h-[40px] h-[10px] w-[10px] md:w-[40px] ml-2 mb-1'/>
        <h1 className='ml-1 text-[20px]  text-white mt-2'>Surya varma</h1>
        </div>
        <div className='flex mr-[10px] ml-4  gap-[20px] text-[20px]  mt-4'>
        <Link to='/'> <h2 className='text-white hover:underline hover:brightness-50 '>Home</h2></Link>

          <Link to='/aboutme'> <h2 className='text-white hover:underline hover:brightness-50 '>About me</h2></Link>
          <Link to='/myeducation'> <h2 className='text-white hover:underline hover:brightness-50  '>My education</h2></Link>
          <Link to='/myskills'>  <h2 className='text-white hover:underline hover:brightness-50 '>My skills</h2></Link>
          <Link to='/contactme'> <h2 className='text-white hover:underline hover:brightness-50 '>Contact me</h2></Link>
       </div>
    </div>
    </div>
  )
}

export default Port