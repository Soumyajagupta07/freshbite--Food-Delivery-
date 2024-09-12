import React from 'react';
import resData from './ResData';

const Res_Card = ({ resData }) => {
  return (
    <div className="res-card">
      <img className="res_logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.cloudinaryImageId} alt={resData.name} />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(', ')}</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.avgRating} ({resData.totalRatingsString})</h4>
    </div>
  );
}

// Higher Order Function
export const withPromotedLebel = (resData) => {
  return() => {
    return(
      <div>
          <label htmlFor="Promoted"></label>
          <Res_Card/>
      </div>
    );
  };
};

export default Res_Card;
