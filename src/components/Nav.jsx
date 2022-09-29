import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import '../CSS/nav.css'
const Nav = () => {
    const navigate = useNavigate()
    const { token } = useSelector((store)=>store)

    const navigateHome = ( ) => navigate('/')
    const navigateCart = ( ) => navigate('/cart')

    const navigateLogin = ( ) => navigate('/login')

  return (
   <div className="NavbarContainer">
  <div className="NavbarInnerContainer">
    {/* =================Home button will active only that time when the token is available===================== */}
  {token ? <div className="NavbarChild" onClick={navigateHome}>Home</div> : <div className="NavbarChild" onClick={()=>alert('Login First')}>Home</div>}
    
    {/* =================Home button will active only that time when the token is available===================== */}

  {token ? <div className="NavbarChild" onClick={navigateCart}>Cart</div> : <div className="NavbarChild" onClick={()=>alert('Login First')}>Cart</div>}
    <div className="NavbarChild" onClick={navigateLogin}>Login</div>
  </div>
   </div>
  )
}

export default Nav