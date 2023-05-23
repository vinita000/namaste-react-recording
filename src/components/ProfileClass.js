import React from 'react';
import { Outlet } from 'react-router-dom'

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // create state
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
      }
    };
    console.log("child --- constructor")
  }
//it is called after first render
  async componentDidMount(){
    // Api calls
    // console.log(" child ---  componentDidMount");
    const data = await fetch("https://api.github.com/users/akshaymarch7")
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    })
  }

  // it is called after every next render...
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  //before it unmounting from dom or we will go go another dom that means this component  unmount from dom 
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
  // process of executing..
  //constructor
  //render
  //component did mount call
  //render
  // both class and functional component uses one big object to manage states
  render(){
    console.log("child --- render")
    console.log(this.state.name)
    const { userInfo } = this.state
    const { name, xyz } = this.props
    return(
      <div>
        <h1>We are here only....Profileclass component</h1>
        <img src={this?.state?.userInfo?.avatar_url} />
        <h2>Name: {this?.state?.userInfo?.name}</h2>
        <h3>Location: {this?.state?.userInfo?.location}</h3>
        {/* {count}
        {count2} */}
        {/* WE DO NOT MUTATE STATR DIRECTLY */}
        {/* NEVER DO THIS this.state = something */}
        {/* <button onClick={()=>this.setState({
          count: count+1,
          count2: count2 +10,
        })}>click me</button> */}
        <Outlet />
      </div>
    )
  }
}

export default ProfileClass;

//child constructor
//child render
//child did mount
//
// Api call
//setState

//
//<Update Cycle>
//render
//componentDidUpdate

// When destroy something
//componentWillUnmount call
