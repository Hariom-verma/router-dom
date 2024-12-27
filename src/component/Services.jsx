import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Services = () => {
  return (
    <div>Services
        <NavLink to={"/services/serviceschild"} >servicechild</NavLink>

     
      <Outlet/>

    </div>
  )
}

export default Services