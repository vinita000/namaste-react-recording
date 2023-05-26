import { useState } from "react";
import Logo from '../assets/img/food_villa.jpeg';
import { Link } from 'react-router-dom'
import useOnline from "../utils/useOnline";
// SPA - Single page Application
// Two types of routing - client side and server side routing

export const Title = () => (
  <a href='/'>
    {/* <img alt='logo' className='logo' src='https://png.pngtree.com/png-clipart/20190516/original/pngtree-food-logo-vector-design.-restaurant-and-cafe-logo.-png-image_3628304.jpg' /> */}
    <img alt='logo' className='logo' src={Logo} />
  </a>
)

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const handleLogout = () => {
    setIsLoggedIn(true);
  };
  
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
          <li><Link to='/instamart'>Instamart</Link></li>
        </ul>
      </div>
      <h1>{isOnline ? 'you r online..': 'oops you r offline..'}</h1>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to='/login'><button>Login</button></Link>
      )}
      {/* { isLoggedIn ? <Link to='/'><button onClick={()=>setIsLoggedIn(false)}>Logout</button></Link> : <Link to='/login'><button onClick={()=>setIsLoggedIn(true)}>Login</button></Link> } */}
    </div>
  )
}

export default Header;