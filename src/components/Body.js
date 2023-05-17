import ResturantCard from "./ResturantCard";
import resturantList from "../constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
//...restro.data.data = It is spread operator

function filterData(searchText, resturants) {
  // console.log(searchText);
  // console.log(resturants);
  // if (searchText.trim() === "") {
  //    return resturants;
  // }else {
  return resturants.filter((res) =>
    res?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
  );
  // }
}
const Body = () => {
  // let searchText = "hello";
  const [allResturants, setAllResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState(""); // return [varibale, function to update variable] searchtext is a local state variable
  // const [click, setClick] = useState("true");
  // function onChangeInput(){
  //   console.log(e.target.value)
  // }
  // re render component with each key press in serach input
  // console.log(resturants);
  // it is callder after every re-render of component
  // here my useeffect depend upon searchText changes thats why we pass serachtext in array = [searchText]
  useEffect(() => {
    // console.log("call this when dependency is changes useEffect");
    // }, [searchText]) // if u want that useeffect is not called after every render then pass depencies array -> [] to it
    //}, [resturants]) //-> you want to call when resturants changes
    // Api call
    getResturants();
  }, []); //here it is not dependent on any thing thats why it is called once
  console.log("render");

  //conditional rendering -- we are rendering eiter shimmer ui or data ui

  async function getResturants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.913416124454908&lng=77.60696925222872&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(json.data.cards[2].data.data.cards);
      // optional chaining ==> if anything undefined returns nil
      setFilteredResturants(json?.data?.cards[2]?.data?.data?.cards);
      setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  //here render called first and useEffect called after component render
  //empty dependency array - useEffect call after render once
  // [searchText] with data inside dependency array - once after render + every time after re render wheny my searchText changes

  // not render component(early return)
  if (!allResturants) return null;

  if (filteredResturants.length === 0 && allResturants.length > 0) return <h1>No resturant found...</h1>;

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
          return <ResturantCard key={index} {...restro.data} />;
        })}
      </div>
    </>
    //index is valid key
  );
};

export default Body;
