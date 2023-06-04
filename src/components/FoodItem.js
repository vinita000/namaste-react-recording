import { IMG_CDN_URL } from '../constants';
const FoodItem = ({name, imageId, description, price}) => {
  return(
    <div className="w-[300px] p-2 m-2 shadow-lg bg-pink-50">
      <img src= {IMG_CDN_URL+imageId}/>
      <h4 className="font-bold text-xl">{name}</h4>
      <h4>{description}</h4> 
      <h4>Rupees {price/100}</h4>
    </div>
  )

}

export default FoodItem;