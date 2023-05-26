
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../constants';
import useResturant from '../utils/useResturant';
import Shimmer from "./Shimmer";
const ResturantMenu = () => {
  // how to read dynamic params url
  const params = useParams();
  // console.log("id1", params.id)
  const [id] = params.id  // this params id pass in url params = { id: 1234 }
  // console.log("id",id)

  //Custom hook for get restro by passing resId = id
  const resturant = useResturant(params.id);
  
  return (!resturant) ? <Shimmer /> :(
    <div className="menu">
      <div>
        {console.log(resturant[0]?.card?.card?.info?.areaName)}
        <h1>Resturant id: {params.id}</h1>
        <h1>name: {resturant[0]?.card?.card?.info?.name}</h1>
        <img src={IMG_CDN_URL+resturant[0]?.card?.card?.info?.cloudinaryImageId}/>
        <h4>{resturant[0]?.card?.card?.info?.cuisines?.join(', ')}</h4>
        <h4>{resturant[0]?.card?.card?.info?.areaName}, {resturant[0]?.card?.card?.info?.city}</h4>
        <h4>{resturant[0]?.card?.card?.info?.costForTwoMessage}</h4>
        <h4>{resturant[0]?.card?.card?.info?.avgRatingString} stars</h4>
      </div>
      <div className="menu-item">
        <h1>Menu:</h1>
        <ul>
          {resturant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards &&
            Object.values(resturant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((item, index) => (
              <div>
                <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                <li><img src={IMG_CDN_URL+item?.card?.info?.imageId}/></li>
                <li>{item.card.info.description}</li>
                <li>{item.card.info.category}</li>
                <h4>Addons: {item.card.info.addons && item.card.info.addons.map((e)=>(
                  <li>{e.groupName}</li>
                ))}</h4>
              </div>
            ))}
            {console.log(resturant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)}
        </ul>
        
      </div>
    </div>
  )
}

export default ResturantMenu;