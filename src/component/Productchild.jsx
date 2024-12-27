import React from 'react'
import { useParams } from 'react-router-dom'

function Productchild() {
 
    const params = useParams()

    const product = fetch(`product/get/${params.producttype}`)

  return (
    <div>Productchild {params.producttype}</div>
  )
}

export default Productchild