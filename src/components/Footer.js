import { useContext } from "react";
import userContext from "../utils/userContext";
const Footer = () => {
  const { user } = useContext(userContext);
  return (
    // <div><h1>Footer</h1></div>
    <h2 className="p-5 m-5 font-bold">This site is developed by {user.name} - {user.email}</h2>
  )
}

export default Footer;