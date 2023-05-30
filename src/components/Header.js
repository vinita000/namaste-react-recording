import { useState, useContext } from "react";
import Logo from '../assets/img/food_villa.jpeg';
import { Link } from 'react-router-dom'
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
// SPA - Single page Application
// Two types of routing - client side and server side routing

export const Title = () => (
  <a href='/'>
    {/* <img alt='logo' className='logo' src='https://png.pngtree.com/png-clipart/20190516/original/pngtree-food-logo-vector-design.-restaurant-and-cafe-logo.-png-image_3628304.jpg' /> */}
    <img alt='logo' className="h-28 p-2" src={Logo} />
  </a>
)

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { user }= useContext(userContext);

  const handleLogout = () => {
    setIsLoggedIn(true);
  };
  
  return(
    <div className="flex justify-between bg-pink-50 shadow-xl sm:bg-blue-50 md:bg-yellow-300">
      <Title />
      <div className='nav-items'>
        <ul className="flex py-10">
          <li className="px-2"><Link to='/'> Home</Link></li>
          {/* <a href='/about'><li>About Us</li></a> */}
          <li className="px-2"><Link to='/about'>About us</Link></li>
          <li className="px-2"><Link>Contact Us</Link></li>
          <li className="px-2"><Link>Cart</Link></li>
          <li className="px-2"><Link to='/instamart'>Instamart</Link></li>
        </ul>
      </div>
      {/* <h1>{isOnline ? 'you r online..': 'oops you r offline..'}</h1> */}
      { isOnline ? <h1 className="p-1- font-bold text-red-900">Welocme, you r online {user.name}</h1> : <h1 className="p-1- font-bold text-red-900">oops!!! you r offline</h1> }
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

//sm = small devices