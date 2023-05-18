import React from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
const Shimmer = () => {
  // return <ShimmerSimpleGallery card imageHeight={340} />
  // custom shimmer
  return (
    <div className="restro-list">
      {Array(10).fill('').map((e, index)=>(<div className="shimmer-card" key={index}></div>))}
    </div>
  )
}

export default Shimmer;
