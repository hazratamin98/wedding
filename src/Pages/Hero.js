import React from "react"

import hero_1 from '../img/hero_1.png'
import hero_2 from '../img/hero_2.png'

function Hero() {
  return (
    <div className=" bg-primary-grident px-40 py-28 flex gap-12  ">
      <div className=" ">
        <h1 className="mb-8 mt-20 ml-20 font-sans style-normal font-bold text-5xl text-primary-dark">
          3 Day Wedding <br /> WithOut Sweating
        </h1>
        <p className=" ml-20 font-Lato style-normal size-1 font-normal text-primary-dark">
          Most couples are sweating With wedding Preparations.
          <br /> We will Make sure that you are not one of them!
        </p>
        <div className="flex gap-10 mt-8">
          <button className=" ml-20 p-3 rounded-full py-3  mt-5 mb-5 bg-primary-dark text-primary-white  hover:bg-primary-white hover:text-primary-melon_deep">Buy now - $247</button>
          <p className="mt-8 font-normal  style-normal size-8"> (80% off, usually 1240$)</p>
         </div>
      </div>
      <div className="m-auto mt-20">
        <img src={hero_1} alt=" " className=" relative bottom-14 left-24 h-50 w-60"/>
          <img src={hero_2} alt=" " className="  absolute bottom-52 h-30 w-40"/>
      </div>
    </div>
  )
}

export default Hero
