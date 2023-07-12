import React, { useEffect, useState } from 'react'
import axiosInstance from '../helpers/axiosInstance'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

 let [productData , setProductData] = useState([])
 let navigate = useNavigate()

 useEffect(()=>{
   let fetchData = async ()=>{
    let {data}  =  await axiosInstance.get("/posts")
   setProductData(data)
  }
  fetchData()
 },[])


 let handleDelete = (id)=>{
  axiosInstance.delete(`/posts/${id}`)
  window.location.assign(`/cart`)
 }

  return (
    <div>
      <br />
      <h1 style={{textAlign: "center"}}>View Products</h1>
    <div className='productBlock'>
     {productData.map((x)=>{
         return(
          <div className='productContainer' >
            <div  id="avatar">
            <img src={`https://avatars.dicebear.com/v2/avataaars/${x.pname}.svg?options%5bmood%5d%5b%5d=happy`} alt="" />
            </div>
            <h2>PRODUCT NAME : {x.pname}</h2>
            <h2>PRODUCT PRICE : {x.pprice}</h2>
            <h2>PRODUCT QTY : {x.pqty}</h2>
            <br />
            <center>
            <button onClick={()=>{
                navigate(`/update/${x.id}`)
            }}>UPDATE</button> 
            <button onClick={()=>{
                handleDelete(x.id)
            }}>DELETE</button>
            </center>
          </div>
         )
      })}
     </div>
    </div>
  )
}

export default Cart
