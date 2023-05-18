import { useState } from "react";
import Logo from '../assets/img/food_villa.jpeg';
import { Link } from 'react-router-dom'
// SPA - Single page Application
// Two types of routing - client side and server side routing

export const Title = () => (
  <a href='/'>
    {/* <img alt='logo' className='logo' src='https://png.pngtree.com/png-clipart/20190516/original/pngtree-food-logo-vector-design.-restaurant-and-cafe-logo.-png-image_3628304.jpg' /> */}
    <img alt='logo' className='logo' src={Logo} />
  </a>
)

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return(
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li><Link to='/'> Home</Link></li>
          {/* <a href='/about'><li>About Us</li></a> */}
          <li><Link to='/about'>About us</Link></li>
          <li><Link>Contact Us</Link></li>
          <li><Link>Cart</Link></li>
        </ul>
      </div>
      { isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button> }
    </div>
  )
}

export default Header;