import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDatafromjson } from '../redux/action'
 import '../CSS/home.css'
import { useNavigate } from 'react-router'
const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
const { products } = useSelector((store)=>store)
// console.log(products,"Home")
    useEffect(()=>{
        getDatafromjson(dispatch)
    },[])
    const handleNavigate = ( id ) =>{
        navigate(`/${id}`)
    }
  return (
    <div className='HomeContainer'>
    {
        products?.map((ele)=>{
            return <div key={ele.id} >
            <div className="productImageBox">
                <img src={ele.image} alt="" />
            </div>
            <h2 className='HomeContainerh2'>{ele.title}</h2>
            <button className="HomePageMoreDetail" onClick={()=>handleNavigate(ele.id)}>More Details</button>
            </div>
        })
    }
    </div>
  )
}

export default Home
