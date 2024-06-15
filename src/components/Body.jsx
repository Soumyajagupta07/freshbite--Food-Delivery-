// Body.js
import React, { useState } from 'react';
import Res_Card from './Res_Card';

const Body = ({ resObj }) => {
  const [filteredResObj, setFilteredResObj] = useState(resObj);

  const handleFilter = () => {
    const filtered = filteredResObj.filter(res => res.info.avgRating > 4);
    setFilteredResObj(filtered);
  };

  return (
    <div>
      <div className="search">Search</div>
      <div className="filter">
        <button className='filter-btn' onClick={handleFilter}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResObj.map((restaurant) => (
          <Res_Card key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
}

export default Body;
