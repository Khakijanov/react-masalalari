import React from 'react'

// custom hook
import useFetch from "../hooks/useFetch"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


function Products() {
    const {data, error}  = useFetch('https://online-json-server-api.up.railway.app/project/66794a821d2cd3eb114409d0/articles')
  return (
    <div>
    {error && console.log('hatolik')}
    <ul>
        {data && data.data.map((product) => {
            return (
               <div>
               <li>{product.title}</li>
               <Link className='btn' to={`/productDetail/${product.id}`}>submit</Link>
               </div>
            )
        })}
    </ul>
    </div>
  )
}

export default Products