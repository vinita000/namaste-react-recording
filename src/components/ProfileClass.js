import React from 'react';
import { Outlet } from 'react-router-dom'

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // create state
    this.state = {
      count: 10,
      count2: 20,
    };
    console.log("constructor")
  }

  componentDidMount(){
    // Api calls
    console.log("componentDidMount");
  }
  // both class and functional component uses one big object to manage states
  render(){
    console.log("render")
    const { count, count2 } = this.state
    const { name, xyz } = this.props
    return(
      <div>
        <h1>We are here only....Profileclass component</h1>
        <h2>Name: {name}</h2>
        <h3>{xyz}</h3>
        {count}
        {count2}
        {/* WE DO NOT MUTATE STATR DIRECTLY */}
        {/* NEVER DO THIS this.state = something */}
        <button onClick={()=>this.setState({
          count: count+1,
          count2: count2 +10,
        })}>click me</button>
        <Outlet />
      </div>
    )
  }
}

export default ProfileClass;