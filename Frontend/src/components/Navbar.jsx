import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 font-teacher flex justify-normal '>
    <div className='logo'>
        logo
      </div>
    <div className='links flex gap-10 pl-72'>
      {["Home","Room & Suites","Flight booking","Restaurant & Bar","Blog"].map((item,index)=>(
         <a key={index} className='text-xl capatalize font-light'>{item}</a>
      ))}
    </div>
    </div>
  )
}


export default Navbar
