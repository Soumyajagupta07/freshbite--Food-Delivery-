// Body.js
import React, { useEffect, useState } from 'react';
import Res_Card from './Res_Card';

const Body = () => {
  const [resObj, setResObj] = useState([]);
  const [filteredResObj, setFilteredResObj] = useState([]);

  const handleFilter = () => {
    const filtered = resObj.filter(res => res.info.avgRating > 4);
    setFilteredResObj(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await response.json();
      console.log(json);

      // Assuming the structure of json is known and contains the restaurants list
      const restaurants = json.data.cards[2].data.data.cards; // Adjust based on actual JSON structure
      setResObj(restaurants);
      setFilteredResObj(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
