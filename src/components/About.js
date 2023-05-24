import { Outlet } from 'react-router-dom'
// if i dont use to use Outlet then by calling profile component should also word
import Profile from './Profile';
import ProfileClass from './ProfileClass';
import React from 'react';
const About2 = () =>{
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
//Sequence of execution...............
//constructor
//render
//componentDidMount
// Why state varibale inside constructor because when first time component initialized costructor called 
class About extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    //   userInfo: {
    //     name: "Dummy name",
    //     location: "Dummy location",
    //   }
    // }
  }

  componentDidMount(){
    console.log("Parent ---- componentDidMount");
    // const data = await fetch("https://api.github.com/users/vinita000")
    // const json = await data.json();
    // console.log(json);
  }

  render(){
    console.log("Parent ---- render");
    return(
      <div className="about">
      <h1>About Us Page</h1>
      <p>This is namaste React live course - chapter - 07</p>
      {/* <Outlet /> */}
      <Profile name={"Vinita functional"}/>
      {/* here react will collect all the props and attach to this class component  ProfileClass*/}
      {/* <ProfileClass name={"Vinita class Component"} xyz="test"/>  */}
    </div>
    )
  }
}

export default About;

// sequence of calling from parent to child
//Parent --- Constructor
//About.js:34 Parent ---- render
//ProfileClass.js:12 child --- constructor
//ProfileClass.js:21 child --- render
// DOM Updated for children
//ProfileClass.js:17  child ---  componentDidMount
//About.js:30 Parent ---- componentDidMount
