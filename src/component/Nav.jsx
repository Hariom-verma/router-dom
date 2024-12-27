import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full flex justify-between'>
      <NavLink  className={(e) => (e.isActive ? "text-red-600 p-4 bg-black" : "")} to={"/"}>Home</NavLink>  
      <NavLink  className={(e) => (e.isActive ? "text-red-600 p-4 bg-black" : "")} to={"/product"}>Product</NavLink>  
      <NavLink   className={(e) => (e.isActive ? "text-red-600 p-4 bg-black" : "")} to={"/about"}>About</NavLink>  
      <NavLink   className={(e) => (e.isActive ? "text-red-600 p-4 bg-black" : "")} to={"/services"}>Services</NavLink>  

    </div>
  )
}

export default Nav