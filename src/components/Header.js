import { useState } from "react";
// for authentication
const loggedInUser = () =>{
  // if user authenticate 
  return false;
}

export const Title = () => (
  <a href='/'>
    <img alt='logo' className='logo' src='https://png.pngtree.com/png-clipart/20190516/original/pngtree-food-logo-vector-design.-restaurant-and-cafe-logo.-png-image_3628304.jpg' />
  </a>
)

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return(
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      { isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button> }
    </div>
  )
}

export default Header;