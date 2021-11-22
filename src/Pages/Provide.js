import React from 'react'

function Provide() {
  return (
    <div className= "bg-primary-melon_light ">
      <h1 className="text-center font-sans text-5xl mt-20 text-black font-medium">This Is What We Provide For You</h1>
       <p className="text-center mt-4 font-normal  font-Lato size-8">Specifically made for you, professionally looking with both of your names, <br/>
       about you section and about wedding location and ceremony</p>

       <div className="grid grid-cols-3 gap-9 mt-10 py-10 mx-16 md:flex-shrink-0 md:grid sm:grid-cols-1  lg:grid-cols-3  ">
           <div className="p-8  hover:bg-primary-white ">
           <span className="w-8 h-16 ml-8 mt-10 mb-8 font-sans font-black size-20 text-4xl text-primary-melon_deep">01</span>
           <h1 className="ml-8  font-sans font-medium text-2xl py-2 text-primary-dark">Online Wedding Planner</h1>
         <p className="ml-8 font-Lato font-normal style-normal  ">Cursus lacus commodo lorem dui <br/> maecenas enim non nullam nulla.<br/> Dignissim massa est integer at. Morbi <br/> fringilla malesuada.</p>
           </div>
        <div className="bg-primary-white p-8">
          <span className="w-8 h-16 ml-8 mt-8 font-sans font-black size-20 text-4xl  text-primary-melon_deep">02</span>
           <h1 className="ml-8  font-sans font-medium text-2xl py-2  text-primary-dark">Wedding Card Invitations</h1>
         <p className="ml-8 font-Lato font-normal style-normal size-4 ">Cursus lacus commodo lorem dui <br/> maecenas enim non nullam nulla.<br/> Dignissim massa est integer at. Morbi <br/> fringilla malesuada.</p>
        </div>
          
           <div className="p-8 hover:bg-primary-white">
          <span className="w-8 h-16 ml-8 mt-8 font-sans font-black text-4xl  size-20 text-primary-melon_deep">03</span>
           <h1 className="ml-8  font-sans font-medium py-2 text-2xl text-primary-dark">Your Wedding Website</h1>
         <p className="ml-8 font-Lato font-normal style-normal size-4 ">Cursus lacus commodo lorem dui <br/> maecenas enim non nullam nulla.<br/> Dignissim massa est integer at. Morbi <br/> fringilla malesuada.</p>
           </div>

           <div className="p-8 hover:bg-primary-white">
          <span className="w-8 h-16 ml-8 mt-8 font-sans font-black text-4xl  size-20 text-primary-melon_deep">04</span>
           <h1 className="ml-8  font-sans font-medium py-2 text-2xl text-primary-dark">Issues With Restrictions?</h1>
         <p className="ml-8 font-Lato font-normal style-normal size-4 ">Cursus lacus commodo lorem dui <br/> maecenas enim non nullam nulla.<br/> Dignissim massa est integer at. Morbi <br/> fringilla malesuada.</p>
        </div>

            <div className="p-8  hover:bg-primary-white">
          <span className="w-8 h-16 ml-8 mt-8 font-sans font-black text-4xl py-4 size-20 text-primary-melon_deep">05</span>
           <h1 className="ml-8  font-sans font-medium py-2 text-2xl text-primary-dark">Time Saving Lists</h1>
         <p className="ml-8 font-Lato font-normal style-normal size-4 ">Cursus lacus commodo lorem dui <br/> maecenas enim non nullam nulla.<br/> Dignissim massa est integer at. Morbi <br/> fringilla malesuada.</p>
            </div>

          
           
      </div>     
  
   <div className="bg-primary-melon_deep p-6  text-center  gap-8  flex lg:flex-row md:flex-col sm:flex-col ">
    <p className="font-14 font-Sans text-primary-white text-4xl font-medium ml-56  ">Only 7 Spots Left At This Price</p>
  <div className=" py-4 ">
    <button className="  p-1 rounded-lg w-36 py-2 bg-primary-white text-primary-melon_deep hover:bg-primary-dark hover:text-primary-white ">Buy now - $247</button>
          <p className=" font-normal  style-normal py-2 text-primary-white"> (off, usually 1240$)</p>
  </div>
    </div>
    </div>

   
  )
}

export default Provide
