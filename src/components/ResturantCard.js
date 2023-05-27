import { IMG_CDN_URL } from '../constants';
const ResturantCard = ({ name, cloudinaryImageId, cuisines, avgRating, slaString }) => {
  // const ResturantCard = (props) => {
    // const {resturantCard} = props
    // const { name, cloudinaryImageId, cuisines, avgRating, slaString } = resturantCard.data.data
  return(
    <div className="w-[300px] p-2 m-2 shadow-lg bg-pink-50">
      <img src= {IMG_CDN_URL+cloudinaryImageId} />
      <h4 className="font-bold text-xl">{name}</h4>
      <h4>{cuisines?.join(', ')}</h4> 
      <h4>{avgRating} starts</h4>
      <h4>{slaString}</h4>
    </div>
  )
}

export default ResturantCard