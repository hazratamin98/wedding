import React from 'react'

import { BeakerIcon } from '@heroicons/react/solid'

function Footer() {
  return (

    <div >
      <div className="px-32 py-20  flex gap-28 md:gap-90 flex-col md:flex-row items-center md:items-start md-900:items-center lg:items-end">
      <div className="flex flex-col text-center items-center md:text-left md:items-start " >
      <a className="flex gap-2 md:gap-4 items-end " href="/">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMjEiIHk9IjIxIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9IiMzNjRDNTgiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxOSIgZmlsbD0iI0ZGOUQ4MCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=" alt="wedding"></img>
         <h3 className="font-josefin text-2xl md:text-heading-4 font-bold">Wedding</h3>
      </a>
      <p className="mt-6 text-base ">Ut in nam augue pulvinar. Amet lectus faucibus scelerisque <br/> cursus. Tortor ac, egestas leo dignissim  duis dignissim <br/> pretium a varius. Fringilla facilisi nunc ut congue elit <br/> elementum accumsan vehicula faucibus.</p>
     </div>
     <div className="flex gap-28 flex-col md:flex-row text-center md:text-left w-full md:w-auto md:flex-wrap md-900:flex-nowrap">
      <ul className="min-w-170 capitalize ">
        <li className="my-2 md:my-1.5 text-base">
          <a href="#Home">Home</a>
        </li>
         <li className="my-2 md:my-1.5 text-base">
          <a href="#program">Home</a>
        </li>
         <li className="my-2 md:my-1.5 text-base">
          <a href="#bonuses">Bounses</a>
        </li>
         <li className="my-2 md:my-1.5 text-base">
          <a href="#guarantee">Guarantee</a>
        </li>
      </ul>
 
      <ul className="min-w-170 capitalize">
        <li className="my-2 md:my-1.5 text-base">
          <a><span>page link 01</span></a>
        </li>
         <li className="my-2 md:my-1.5 text-base">
          <a><span>page link 02</span></a>
        </li>
         <li className="my-2 md:my-1.5 text-base">
          <a><span>page link 03</span></a>
        </li>
         <li className="my-2 md:my-1.5 text-base">
          <a><span>page link 04</span></a>
        </li>
      </ul>

      <ul className="min-w-170 capitalize">
        <li className="my-2 md:my-1.5 text-base">
          <a ><span>privacy</span></a>
        </li>
         <li className="my-2 md:my-1.5 text-base">
          <a><span>Terms & Condition</span></a>
        </li>
         <li className="my-2 md:my-1.5 text-base">
          <a ><span>Cookie Policy</span></a>
        </li>
         <li className="my-2 md:my-1.5 text-base">
          <a><span>Return Policy</span></a>
        </li>
      </ul>
     

    </div>
    
    
     </div>
     <hr/>
    <div className=' flex justify-center align-baseline gap-80 mt-6 py-4   '>
      <div className="flex items-center gap-8" >
           {/* <svg w-40 h-40 xmlns="http://www.w3.org/2000/svg" className=" transition cursor-pointer social--icon rounded-50 text-white hover:text-primary-melon_deep hover:shadow-icon" ><rect width="40" height="40" rx="20" fill="currentColor"></rect><path d="M21.397 28.997v-8.196h2.765l.411-3.209h-3.176v-2.044c0-.926.258-1.56 1.587-1.56h1.684v-2.86c-.82-.089-1.643-.131-2.467-.128-2.444 0-4.122 1.492-4.122 4.231v2.355h-2.747v3.21h2.753v8.201h3.312z"></path></svg> */}
       
        <svg class="w-8 h-8 rounded fill-current text-white   hover:text-primary-melon_deep hover:shadow-icon" xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24">
  <path
    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
  />
</svg>

<svg
  class="w-8 h-8 rounded fill-current hover:text-primary-melon_deep hover:shadow-icon"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24">
  <path
    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
  />
</svg>

<svg
  class="w-8 h-8 rounded fill-current  hover:text-primary-melon_deep hover:shadow-icon"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 448 512">
  <path
    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
  ></path>
</svg>
 </div>
 
        <p className="text-base capitalize text-center  mt-6 md:mt-o">
          <span >&copy; copyright 2021 </span>
          <span className="md:font-bold">  Green River Studio</span>
           <span className="block md:inline">. all rights reserved</span>
        </p>
    </div>
    </div>
  )
}

export default Footer
