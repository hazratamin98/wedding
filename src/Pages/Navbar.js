import React from "react"
import vector from "../img/Vector.png"

function Navbar() {
  return (
    <nav className=" bg-primary-grident flex justify-center align-baseline items-center justify-items-center gap-8 ">
      <div className="flex  gap-2 mt-8">
         <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMjEiIHk9IjIxIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9IiMzNjRDNTgiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxOSIgZmlsbD0iI0ZGOUQ4MCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=" alt="wedding"></img>
      <h1 className="text-2xl mt-4 style-normal mr-40 font-bold font-sans">
         Wedding
      </h1>
      </div>
      <div className="text-lg text-gray-600 hidden lg:flex gap-5 mt-10 ">
        <a
          href="#"
          className="w-25 h-8  ml-1 mt-1 font-Lato style-normal font-bold size-7 leading-4 hover:text-primary-melon_deep"
        >
          Home
        </a>
        <a
          href="#"
          className="w-25 h-8 ml-5 mt-1 font-Lato style-normal font-normal size-7 leading-4 hover:text-primary-melon_deep"
        >
          program
        </a>
        <a
          href="#"
          className="w-25 h-8 ml-5 mt-1 font-Lato style-normal font-normal size-7 leading-4 hover:text-primary-melon_deep"
        >
          Bonuses
        </a>
        <a
          href="#"
          className="w-25 h-8 ml-5 mt-1 font-Lato style-normal font-normal size-7 leading-4 hover:text-primary-melon_deep"
        >
          Guarantee
        </a>
      </div>
      <div className=" bg-primary-dark h-9 w-36 rounded-lg flex  text-white gap-1 mt-10 hover:bg-primary-white ">
        <img src={vector} alt="vector" className="w-4.2 h-4 mt-2 ml-2 hover:text-primary-melon_deep" />
        <button className=" bg-white text-primary-white   font-Lato style-normal font-bold  center hover:text-primary-melon_deep ">
          BUY NOW
        </button>
      </div>
    </nav>
  )
}

export default Navbar
