import { CART_dATA, DETAIL, GET_DATA, LOGIN } from "./actionType"

const getData = ( payload ) =>{
    return{
        type:GET_DATA,
        payload
    }
}

const DetailData = ( payload ) =>{
    return{
        type:DETAIL,
        payload
    }
}

const CartData = ( payload ) =>{
    return{
        type:CART_dATA,
        payload
    }
}

const loginData = ( payload ) =>{
    return{
        type:LOGIN,
        payload
    }
}
export async function getDatafromjson ( dispatch ){
    try {
        let res = await fetch('http://localhost:8080/products')
        let data = await res.json()
        dispatch(getData(data))
    } catch (error) {
        console.log(error)
    }
}

export async function getdetail ( dispatch,id ){
    try {
        let res = await fetch(`http://localhost:8080/products/${id}`)
        let data = await res.json()
        dispatch(DetailData(data))
    } catch (error) {
        console.log(error)
    }
}

export async function getCartData ( dispatch ){
    try {
        let res = await fetch('http://localhost:8080/cart')
        let data = await res.json()
        dispatch(CartData(data))
    } catch (error) {
        console.log(error)
    }
}


export async function login ( dispatch,email,password,navigate ){
    try {
        let res = await fetch('https://reqres.in/api/login',{ 
            method: "post",
            body:JSON.stringify({email,password}),
            headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        })
        let data = await res.json()
        console.log(data,'login data action.js')
        dispatch(loginData(data))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const removefromCart= async( id,dispatch ) =>{
    try {
      let res = await fetch(`http://localhost:8080/cart/${id}`,{
          method: "DELETE"
      })
      let data = await res.json()
      getCartData(dispatch)
    } catch (error) {
      console.log(error)
    }
  }

  export const handleNumber = async(ele,num,dispatch) =>{
   ele.number = ele.number + num
    if(ele.number <= 0){
    //   alert("Quantity can not be Negative integer")
    removefromCart(ele.id,dispatch)
      return
    }
    try {
      let res = await fetch(`http://localhost:8080/cart/${ele.id}`,{
          method :"PATCH",
          body:JSON.stringify(ele),
          headers: {
              'Content-type': 'application/json'
          }
      })
      let data = await res.json()
      getCartData(dispatch)
    } catch (error) {
      console.log(error)
    }
  }
