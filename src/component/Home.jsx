import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
   
   const navigate = useNavigate()
   const aboutHandler =()=>{
      navigate("/about")

   }

   
   return (
       <div className=' flex gap-10'>Home

        <NavLink to={"/about"}>Go to about navlink</NavLink>
    <button onClick={aboutHandler}>Go to about</button>

    </div>
  )
}

export default Home