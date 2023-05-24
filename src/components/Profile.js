import { useState, useEffect } from 'react'
const Profile = (props) => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  console.log("constructor")
  // for Api calling
  // Suppose you want to change some thing by changing count and some thing different by changing count2 we write 2 useEffect
  useEffect(() => {
    //console.log('Calling Api....);
    console.log("useEffect");
    const timer = setInterval(()=>{
      console.log("starte timer");
    }, 1000)

    // it is called when you unmounting the component
    return(() =>{
      clearInterval(timer);
      console.log("useEffect return");
    })
  },[]) // this useEffect called after every time state varibale update

  useEffect(() => {
    //console.log('Calling Api....);
  },[count2])
  console.log("render")
  return(
    <div>
      <h1>Hey! You are in profile component.......</h1>
      <h2>Name: {props.name}</h2>
      {count}
      {count2}
      <button onClick={() =>{
        setCount(count+1); setCount2(count+3);
      }}>Press button</button>
    </div>
  )
}

export default Profile;