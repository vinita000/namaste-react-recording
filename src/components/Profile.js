import { useState, useEffect } from 'react'
const Profile = (props) => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  console.log("constructor")
  // for Api calling
  useEffect(() => {
    //console.log('Calling Api....);
  })
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