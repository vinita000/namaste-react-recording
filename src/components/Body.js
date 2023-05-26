import ResturantCard from "./ResturantCard";
import resturantList from "../constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom'
import { filterData } from "../utils/helper";
import useResturantList from '../utils/useResturantList'
import useOnline from "../utils/useOnline";
//...restro.data.data = It is spread operator

// function filterData(searchText, resturants) {
//   // console.log(searchText);
//   // console.log(resturants);
//   // if (searchText.trim() === "") {
//   //    return resturants;
//   // }else {
//   return resturants.filter((res) =>
//     res?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
//   );
//   // }
// }
const Body = () => {
  // let searchText = "hello";
  const [searchText, setSearchText] = useState(""); // return [varibale, function to update variable] searchtext is a local state variable
  // const [click, setClick] = useState("true");
  // function onChangeInput(){
  //   console.log(e.target.value)
  // }
  // re render component with each key press in serach input
  // console.log(resturants);
  // it is callder after every re-render of component
  // here my useeffect depend upon searchText changes thats why we pass serachtext in array = [searchText]

  // custom hooks for fetching resturants
  const [allResturants, filteredResturants] = useResturantList([])

  //here render called first and useEffect called after component render
  //empty dependency array - useEffect call after render once
  // [searchText] with data inside dependency array - once after render + every time after re render wheny my searchText changes

  // not render component(early return)
  if (!allResturants) return null;

  if (filteredResturants.length === 0 && allResturants.length > 0) return <h1>No resturant found...</h1>;

  // checking online or not
  const isOnline = useOnline();
  console.log("isOnline", isOnline);
  if(!isOnline){
      return <h1><span class="dot"></span>Offline, please check your internet connection!</h1>
  }

  return allResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            // e.target.vaule is wahtever we are writing in input box
            // two way binding - here we write data and read from <h1>{searchText}</h1> is called two way binding
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // filter data i.e, restro list
            // const filterList = resturants.filter((res)=> res.data.data.name == searchText);
            // setResturants(filterList) // update state
            // console.log(filterList)
            
            const data = filterData(searchText, allResturants);
            // console.log(data);
            setFilteredResturants(data); //update state resturants

          }}
        >
          Search
        </button>
      </div>
      <div className="restro-list">
        {/* <h1>{click}</h1> */}
        {/* <h1>{searchText}</h1> */}
        {/* { resturantList.map((restro, key)=>(
            <ResturantCard key={restro.data.data.id} {...restro.data.data}/>
          ))
        } */}
        {/* { resturants.map((restro, key)=>{
          // console.log("cheking",restro.data);
            return <ResturantCard key={restro.data.id} {...restro.data}/>;
        })
        } */} 
        {filteredResturants && filteredResturants.map((restro, index) => {
          return <Link to={"/resturants/"+restro.data.id}>
            <ResturantCard key={index} {...restro.data} />
          </Link>;
        })}
      </div>
    </>
    //index is valid key
  );
};

export default Body;
