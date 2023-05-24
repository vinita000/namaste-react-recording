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
// this keyword will share with all the method of the class
  // async componentDidMount(){
  componentDidMount(){
    // Api calls
    // console.log(" child ---  componentDidMount");
    // const data = await fetch("https://api.github.com/users/akshaymarch7")
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //   userInfo: json,
    // })
    this.timer = setInterval(()=>{
      console.log("starte timer");
    }, 1000);
  }

  // it is called after every next render... or state update
  componentDidUpdate(prevState, prevProps){
    console.log("componentDidUpdate");
    if(
      this.state.userInfo.name !== prevState.userInfo.name ){
        console.log("code executing name");
    }

    if(
      this.state.userInfo.location !== prevState.userInfo.location) {
        console.log("code executing location");
    }
  }

  //before it unmounting from dom or we will go go another dom that means this component  unmount from dom 
  componentWillUnmount(){
    console.log("componentWillUnmount")
    // clear timer if we are not clear then it is called at every component
    clearInterval(this.timer);
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
