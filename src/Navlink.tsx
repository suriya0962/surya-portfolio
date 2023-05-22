
import {Link} from 'react-router-dom'

const Port = () => {
  return (
    <div className=''>
      <div className='flex justify-between  bg-black font-semibold h-[60px]'>
      <div className='flex '>
        <img src='https://www.sportingvote.com/wp-content/uploads/2018/06/cropped-sv_logo_large-1.png' className='h-[40px] w-[40px] ml-2 mt-3'/>
        <h1 className='ml-2 text-[20px] text-white mt-4'>Surya varma</h1>
        </div>
        <div className='flex mr-[10px] gap-5  mt-4'>

        <Link to='/home'> <h2 className='text-white hover:underline hover:brightness-50'>Home</h2></Link>
        
          <Link to='/aboutme'> <h2 className='text-white hover:underline hover:brightness-50'>About me</h2></Link>
          <Link to='/myeducation'> <h2 className='text-white hover:underline hover:brightness-50 '>My education</h2></Link>
          <Link to='/myskills'>  <h2 className='text-white hover:underline hover:brightness-50'>My skills</h2></Link>
          <Link to='/contactme'> <h2 className='text-white hover:underline hover:brightness-50'>Contact me</h2></Link>
       </div>
    </div>
   
    </div>
  )
}

export default Port