import React from 'react';
import Res_Card from './Res_Card';

const Body = ({ resObj }) => {
  return (
    <div>
      <div className="search">Search</div>
      <div className="filter">
        <button className='filter-btn' onClick={() => {
            resObj = resObj.filter(
                (res) => res.info.avgRating > 4 
            );
        }}
        Top rated Restaurant
        />
      </div>
      <div className="res-container">
        {resObj.map((restaurant) => (
          <Res_Card key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
}

export default Body;
