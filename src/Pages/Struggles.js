import React from "react"
import str_one from "../img/strg-1.png"
import str_two from "../img/strg-2.png"
import str_three from "../img/strg-3.png"

function Struggles() {
  return (
    <div className="flex px-40  gap-40 ">
      <div className="ml-32 mt-20">
        <img src={str_one} alt="str-1" className="relative left-32 w-52 he-40 " />
        
        <img src={str_three} alt="str-1" className="relative right-20 bottom-28 w-26 h-18" />
          <img src={str_two} alt="str-1" className="relative left-40 bottom-56  w-48 h-48  " />
      </div>

      <div className="mt-20">
        <h1 className="font-sans font-medium text-5xl py-6">
          Usual Wedding Prep <br /> Struggles Include
        </h1>
        <ul class="mt-5">
          <li className="flex gap-2.5 mb-1.5 md:items-center">
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"><path d="M10 18.333A8.343 8.343 0 011.667 10v-.167a8.335 8.335 0 118.333 8.5zm0-15A6.667 6.667 0 1016.667 10 6.674 6.674 0 0010 3.333zm0 10.834l-1.175-1.175 2.15-2.159H5.833V9.167h5.142l-2.15-2.159L10 5.833 14.167 10 10 14.167z" fill="#FF9D80"></path></svg>
         <span className="text-base">Ut amet, egestas imperdiet nam bibendum eleifend.</span>
          </li>
           <li className="flex gap-2.5 mb-1.5 sm:items-center">
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"><path d="M10 18.333A8.343 8.343 0 011.667 10v-.167a8.335 8.335 0 118.333 8.5zm0-15A6.667 6.667 0 1016.667 10 6.674 6.674 0 0010 3.333zm0 10.834l-1.175-1.175 2.15-2.159H5.833V9.167h5.142l-2.15-2.159L10 5.833 14.167 10 10 14.167z" fill="#FF9D80"></path></svg>
         <span className="text-base">Viverra lectus lorem sem ac euismod tristique libero.</span>
          </li>
           <li className="flex gap-2.5 mb-1.5 md:items-center">
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"><path d="M10 18.333A8.343 8.343 0 011.667 10v-.167a8.335 8.335 0 118.333 8.5zm0-15A6.667 6.667 0 1016.667 10 6.674 6.674 0 0010 3.333zm0 10.834l-1.175-1.175 2.15-2.159H5.833V9.167h5.142l-2.15-2.159L10 5.833 14.167 10 10 14.167z" fill="#FF9D80"></path></svg>
         <span className="text-base">Enim pellentesque feugiat donec lectus mus. Donec.</span>
          </li>
           <li className="flex gap-2.5 mb-1.5 md:items-center">
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"><path d="M10 18.333A8.343 8.343 0 011.667 10v-.167a8.335 8.335 0 118.333 8.5zm0-15A6.667 6.667 0 1016.667 10 6.674 6.674 0 0010 3.333zm0 10.834l-1.175-1.175 2.15-2.159H5.833V9.167h5.142l-2.15-2.159L10 5.833 14.167 10 10 14.167z" fill="#FF9D80"></path></svg>
         <span className="text-base">Montes, sit leo nec eu. Sit posuere eu auctor..</span>
          </li>
           <li className="flex gap-2.5 mb-1.5 md:items-center">
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"><path d="M10 18.333A8.343 8.343 0 011.667 10v-.167a8.335 8.335 0 118.333 8.5zm0-15A6.667 6.667 0 1016.667 10 6.674 6.674 0 0010 3.333zm0 10.834l-1.175-1.175 2.15-2.159H5.833V9.167h5.142l-2.15-2.159L10 5.833 14.167 10 10 14.167z" fill="#FF9D80"></path></svg>
         <span className="text-base">Sit quam potenti eget malesuada placerat dui. Eu.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Struggles
