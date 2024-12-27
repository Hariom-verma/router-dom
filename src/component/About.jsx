import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div className='flex gap-7 flex-col'>About page
        <NavLink to={'/about/aboutchild'}>about Child</NavLink>
        <NavLink to={'/about/noidea'}>No idea</NavLink>
       <div className='bg-red-900'> <Outlet/></div>
       <div>Footer</div>
    </div>
  )
}

export default About