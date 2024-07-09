
import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import Res_Card from './Res_Card';
import { Link } from 'react-router-dom';

const Body = () => {
  const [resObj, setResObj] = useState([]);
  const [filteredResObj, setFilteredResObj] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleFilter = () => {
    const filtered = resObj.filter(res => res.info.avgRating > 4);
    setFilteredResObj(filtered);
  };
  
  const handleSearch = () => {
    console.log('Search text:', searchText);
    const searchFiltered = resObj.filter(res => 
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResObj(searchFiltered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await response.json();
      console.log(json);

      // Assuming the structure of json is known and contains the restaurants list
       
        const res = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResObj(res);
        setFilteredResObj(res);
        console.log(filteredResObj);
    
  };

  // Conditional rendering
  if(resObj.length === 0)
     return <Shimmer/>
  

  return (
    <div>
       <div className="search">
        <input type='text' placeholder='Search...'
          className='search-box'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        /> 
        
        <button className='search-btn' onClick={handleSearch}
          //  const filterRes = resObj.filter((res) => res.data.name.includes(searchText))
        >
          Search
        </button>
      </div>

      <div className="filter">
        <button className='filter-btn' onClick={handleFilter}>
         
          Top Rated Restaurant
        </button>
      </div>
      <button onClick={() => 
        {console.log(searchText)}}>
      </button>

      <div className="res-container">
        {filteredResObj.map((restaurant) => (
          <Link to={"/restaurant/"+restaurant.info.id}><Res_Card key={restaurant.info.id} resData={restaurant.info} /></Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
