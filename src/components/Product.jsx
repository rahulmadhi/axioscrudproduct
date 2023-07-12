import React, { useState } from 'react'
import axiosInstance from '../helpers/axiosInstance'
import { useNavigate } from 'react-router-dom'

const Product = () => {

    let [pname , setPname] = useState("")
    let [pprice , setPprice] = useState("")
    let [pqty , setPqty] = useState("")
    let navigate  = useNavigate()

    let handleSubmit = (e)=>{
        e.preventDefault()
        console.log({pname , pprice , pqty});
        const payload ={
            pname , 
            pprice , 
            pqty
        }
        axiosInstance.post("/posts" , payload)
        navigate('/cart')
    }

  return (
    <div>
        <form action="">
            <fieldset>
                <legend>PRODUCT PAGE</legend>
                <label htmlFor="pname">Product Name : </label>
                <input type="text" id='pname' name='pname'
                onChange={(e)=>{
                    setPname(e.target.value)
                }} /> <br /> <br />
                <label htmlFor="pprice">Product Price  : </label>
                <input type="text" id='pprice' name='pprice'
                onChange={(e)=>{
                    setPprice(e.target.value)
                }}/> <br /> <br />
                <label htmlFor="pqty">Product Quantity : </label>
                <input type="text" id='pqty' name='pqty'
                 onChange={(e)=>{
                    setPqty(e.target.value)
                }}/> <br /> <br />
                <button onClick={handleSubmit}>Add to cart</button>
            </fieldset>
        </form>
    </div>
  ) 
}

export default Product
