import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getdetail } from '../redux/action'
import '../CSS/detail.css'

const MorePage = () => {
    const{id} = useParams()
    const dispatch = useDispatch()
    console.log(id)
    useEffect(()=>{
        getdetail(dispatch,id)
    },[])

    const {detail} = useSelector((store)=>store)
    console.log(detail.image)
    const addtoCart = async( ) =>{
      try {
        let res = await fetch(`http://localhost:8080/cart`,{ 
            method: "post",
            body:JSON.stringify({...detail,number:1}),
            headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        })
        let data = await res.json()
        console.log(data)
        alert('Item Got Added to Cart')
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className="detailContainer">
     <div className="detailImage">
        <img style={{width:"100%",height:"400px",borderRadius:'1vw'}} src={detail.image} alt="" />
     </div>
     <p className="brand">Title : {detail.title}</p>
     <p className="brand">Brand Name : {detail.brand}</p>

     <p className="brand">Category : {detail.category}</p>

     <p className="brand">Price : {detail.price}</p>

     {/* =================this function invoke the function addtocar in action.js that will add the Item in the cart ============================== */}
     
     <div className="addtoCart" onClick={addtoCart}>Add To Cart</div>

    </div>
  )
}

export default MorePage

// {
//     "id": 1,
//     "brand": "Roadster",
//     "title": "cotton Checked Casual Shirt",
//     "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg",
//     "category": "men",
//     "price": 844
//   }