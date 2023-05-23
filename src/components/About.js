import { Outlet } from 'react-router-dom'
// if i dont use to use Outlet then by calling profile component should also word
import Profile from './Profile';
import ProfileClass from './ProfileClass';
const About = () =>{
  return(
    <div className="about">
      <h1>About Us Page</h1>
      <p>This is namaste React live course - chapter - 07</p>
      {/* <Outlet /> */}
      <Profile name={"Vinita functional"}/>
      {/* here react will collect all the props and attach to this class component  ProfileClass*/}
      <ProfileClass name={"Vinita class Component"} xyz="test"/> 
    </div>
  )
}

export default About;