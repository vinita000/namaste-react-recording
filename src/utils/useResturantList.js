import { useState, useEffect } from 'react';
import { RESTURANT_LIST } from '../constants'
const useResturantList = () => {
  const [allResturants, setAllResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);

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
      const data = await fetch(RESTURANT_LIST);
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

  return [allResturants, filteredResturants];

}


export default useResturantList;