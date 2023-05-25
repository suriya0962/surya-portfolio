

const Myeducation = () => {
  return (
     
        <div className='bg-[#161616] h-[100vh] w-[100%] pt-[20px] ' >
         <div className="bg-[#161616] shadow-xl h-[120px] w-[100%] ml-[50px]  flex gap-4" data-aos='slide-right' data-aos-delay='1500' >
          
                <div>
                <img src='data:image/png;base64,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'
                className="h-[90px] w-[60px] mt-[13px]"/>
                </div>
                <div className="">
                <h1 
                className="text-white  text-[30px] ">School Education</h1>
                <p className="text-white  text-[15px]  ">I studied my school education upto 10th standard in Bhashyam public school in viazainagarm</p>
                <p className="text-white  text-[15px]  ">I completed my 10th class eduation with 8.7 cgpa</p>
             </div>
            </div>
            <div className="bg-[#161616] shadow-xl h-[120px] w-[100%] ml-[50px] mt-[50px] flex gap-4" data-aos='slide-left' data-aos-delay='1500' >
          
          <div>
        <img src='https://cdn-icons-png.flaticon.com/512/8074/8074808.png'
          className="h-[90px] bg-white w-[60px] mt-[13px]"/>
          </div>
          <div className=" ">
          <h1 className="text-white  text-[30px] ">Intermediate Education</h1>
          <p className="text-white  text-[15px]  ">I studied my intermediate eduation  in narayana junior college in viazainagarm</p>
          <p className="text-white  text-[15px]  ">I completed my inter eduation with 80 percentage</p>
       </div>
      </div>
      <div className="bg-[#161616] shadow-xl h-[120px] w-[100%] ml-[50px] mt-[50px] flex gap-4" data-aos='slide-right' data-aos-delay='1500'>
          
          <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59CpqPxet4aQSLztIerfAjF7qyS6LfuAS8Q&usqp=CAU'
          className="h-[90px] bg-white w-[60px] mt-[13px]"/>
          </div>
          <div className=" ">
          <h1 className="text-white  text-[30px] ">Engeneering Graduation</h1>
          <p className="text-white  text-[15px]  ">I studied bachalore of technology in information technology department  in M.v.g.r college of engeneering in viazainagarm</p>
          <p className="text-white  text-[15px]  ">I completed my graduation with 6.2 cgpa</p>
       </div>
      </div>
         </div>
        
   
  )
}

export default Myeducation