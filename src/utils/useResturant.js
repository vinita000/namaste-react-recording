import { useState, useEffect } from 'react';
import { MENU_URL } from '../constants';
const useResturant = (id) => {
  const [resturant, setResturant] = useState([])

  useEffect(()=> {
    getResturantInfo();
  }, [])

  async function getResturantInfo() {
    console.log(id);
    const data = await fetch(MENU_URL+id)
    const json = await data.json();
    console.log(json.data.cards)
    // console.log(Object.values(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards))
    setResturant(json.data.cards)
  }
  
  return resturant;

}

export default useResturant;