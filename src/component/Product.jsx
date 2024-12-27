import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>Product page


        <div className='flex flex-col mx-5 my-10'>
        <Link to={"/product/footware"}>Footware</Link>
        <Link to={"/product/home_applinces"}>Home applices</Link>
        <Link  to={"/product/clothing"}>Clothing </Link>
        <Link  to={"/product/grocery"}>Groyceries</Link>
        <Link to={"/product/other"}>Other</Link>
        </div>
   
   <NavLink to={"/product/productChild"}> Product child</NavLink>
   <Outlet/>
    </div>
  )
}

export default Product