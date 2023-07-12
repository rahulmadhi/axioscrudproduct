import React, { useEffect, useState } from 'react'
import axiosInstance from '../helpers/axiosInstance'
import { useNavigate, useParams } from 'react-router-dom'


const Update = () => {

    let [pname , setPname] = useState("")
    let [pprice , setPprice] = useState("")
    let [pqty , setPqty] = useState("")

    let navigate  = useNavigate()
    let {id} = useParams()

    useEffect(()=>{

        let fetchData = async ()=>{
           
        let {data} =  await axiosInstance.get(`/posts/${id}`)
        setPname(data.pname)
        setPprice(data.pprice)
        setPqty(data.pqty)
       
        }
        fetchData()
    },[])


    let handleSubmit = (e)=>{
        e.preventDefault()
        console.log({pname , pprice , pqty});
        const payload ={
            pname , 
            pprice , 
            pqty
        }
       axiosInstance.put(`/posts/${id}` , payload)
    navigate('/cart')
    }

  return (
    <div>
        <form action="">
            <fieldset>
                <legend>UPDATE PRODUCT</legend>
                <label htmlFor="pname">Product Name : </label>
                <input value={pname} type="text" id='pname' name='pname'
                onChange={(e)=>{
                    setPname(e.target.value)
                }} /> <br /> <br />
                <label htmlFor="pprice">Product Price  : </label>
                <input value={pprice} type="text" id='pprice' name='pprice'
                onChange={(e)=>{
                    setPprice(e.target.value)
                }}/> <br /> <br />
                <label htmlFor="pqty">Product Quantity : </label>
                <input value={pqty} type="text" id='pqty' name='pqty'
                 onChange={(e)=>{
                    setPqty(e.target.value)
                }}/> <br /> <br />
                <button onClick={handleSubmit}>Update Product</button>
            </fieldset>
        </form>
    </div>
  ) 
}

export default Update
