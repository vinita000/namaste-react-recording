import ResturantCard from './ResturantCard';
import resturantList from '../constants';
import { useState } from 'react';
//...restro.data.data = It is spread operator

function filterData(searchText, resturants){
  console.log(searchText);
  // console.log(resturants);
  // if (searchText.trim() === "") {
  //    return resturants;
  // }else {
    return resturants.filter((res) => res.data.data.name.toLowerCase().includes(searchText));
  // }
}
const Body = () => {
  // let searchText = "hello";
  const [resturants, setResturants] = useState(resturantList);
  const [searchText, setSearchText] = useState(''); // return [varibale, function to update variable] searchtext is a local state variable
  // const [click, setClick] = useState("true");
  // function onChangeInput(){
  //   console.log(e.target.value)
  // }
  // re render component with each key press in serach input
  console.log(resturants);
  return (
    <>
      <div className='search'>
        <input type='text' 
               className='search-input'
               placeholder='search' 
               value={searchText} 
               onChange={(e)=> {
                // e.target.vaule is wahtever we are writing in input box
                // two way binding - here we write data and read from <h1>{searchText}</h1> is called two way binding
                setSearchText(e.target.value);
                }
              }
        />
        <button className='search-btn' 
        onClick={()=>{
          // filter data i.e, restro list
          // const filterList = resturants.filter((res)=> res.data.data.name == searchText);
          // setResturants(filterList) // update state
          // console.log(filterList)
          if (searchText.trim() === '') {
            setResturants(resturantList);
          } else{
            const data = filterData(searchText, resturants);
            console.log(data);
            setResturants(data); //update state resturants
          }
        }}>Search</button>
      </div>
      <div className='restro-list'>
        {/* <h1>{click}</h1> */}
        {/* <h1>{searchText}</h1> */}
        {/* { resturantList.map((restro, key)=>(
            <ResturantCard key={restro.data.data.id} {...restro.data.data}/>
          ))
        } */}
        { resturants.map((restro, key)=>{
            return <ResturantCard key={restro.data.data.id} {...restro.data.data}/>;
        })
        }
        {/* { resturantList.map((restro, index)=>{
            return <ResturantCard key={index} {...restro.data.data}/>;
        })
        } */}
      </div>
    </>
    //index is valid key
  )
}

export default Body;