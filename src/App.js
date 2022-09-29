import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import {Routes, Route} from "react-router-dom"
import MorePage from './components/MorePage';
import Cart from './components/Cart';
import Login from './components/Login';
import { useSelector } from 'react-redux';
function App() {
  const { token } = useSelector((store)=>store)

  return (
    <>
    {/* <Nav />
    <Home /> */}
    <Nav/>
    { token ?  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/:id' element={<MorePage/>}></Route>
    <Route path='/Cart' element={<Cart/>}></Route>
    <Route path='/login' element={<Login/>}></Route>


  </Routes> : <Login />
 }
 
    </>
  );
}

export default App;
