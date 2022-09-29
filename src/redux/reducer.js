import { CART_dATA, DETAIL, GET_DATA, LOGIN } from "./actionType"

const store = {
    products:[],
    detail:{},
    cart:[], 
    token:""
}

export const reducer = ( initState = store,{type,payload}) =>{
    switch(type){
        case GET_DATA :
            return{
                ...initState,products:payload
            }
        case DETAIL :
            return {
                ...initState,detail:payload
            }
        case CART_dATA :
            return {
                ...initState,cart:payload
            }
        case LOGIN :
            return{
                ...initState,token:payload
            }
        default :
        return initState
    }
}