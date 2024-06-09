import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://w7.pngwing.com/pngs/894/279/png-transparent-online-food-ordering-food-delivery-grubhub-others-food-service-logo-thumbnail.png" alt="logo" />
        <h1 className="fresh">FreshBite</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

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

  const resObj = [
    {
      info: {
        id: "769456",
        name: "Pizza Hut",
        cloudinaryImageId: "490629b70f89da8a5b93fc199ece335e",
        locality: "Kalikapur",
        areaName: "Kolkata",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.3,
        parentId: "721",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
      }
    },
    {
      info: {
        id: "3071",
        name: "Jai Hind Dhaba",
        cloudinaryImageId: "cdbdjcego1vt4reojqiy",
        locality: "Bhawanipur",
        areaName: "Bhawanipur",
        costForTwo: "₹500 for two",
        cuisines: [
          "North Indian",
          "Indian",
          "Tandoor",
          "Kebabs",
          "Punjabi",
          "Home Food",
          "Chinese"
        ],
        avgRating: 4.5,
        parentId: "1928",
        avgRatingString: "4.5",
        totalRatingsString: "10K+",
      }
    },
    {
      info: {
        id: "39309",
        name: "KFC",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/76795500-8115-430e-8634-fa86dc2be090_39309.JPG",
        locality: "Kasba",
        areaName: "Kasba",
        costForTwo: "₹450 for two",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 4.5,
        parentId: "547",
        avgRatingString: "4.5",
        totalRatingsString: "10K+",
      }
    },
    {
      info: {
        id: "453671",
        name: "Wow! Chicken By Wow! Momo",
        cloudinaryImageId: "ee9c2f12dd4fe8e3cb8c0e8a7ecc56be",
        locality: "Anna Nagar",
        areaName: "Acropolis Mall",
        costForTwo: "₹300 for two",
        cuisines: ["American", "Snacks", "Beverages", "Continental"],
        avgRating: 4.3,
        parentId: "268366",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
      }
    },
    {
      info: {
        id: "260151",
        name: "Delights by INOX",
        cloudinaryImageId: "b857fcf611707fedd3773eb02688f925",
        locality: "KOLKATA QUEST MALL",
        areaName: "Ballygunge",
        costForTwo: "₹400 for two",
        cuisines: ["Snacks"],
        avgRating: 4.4,
        parentId: "385095",
        avgRatingString: "4.4",
        totalRatingsString: "100+",
      }
    },
    {
      info: {
        id: "834096",
        name: "The Dessert Heaven - Pastry, Brownie and Cakes",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/24/be393804-2d6a-4a9d-80e3-45383be0e346_834096.jpg",
        locality: "KOLKATA MUNICIPAL CORPORATION",
        areaName: "RASH BEHARI AVENUE",
        costForTwo: "₹200 for two",
        cuisines: ["Bakery", "Desserts", "Beverages", "Ice Cream", "Sweets", "Juices", "Bengali"],
        avgRating: 4.7,
        parentId: "506176",
        avgRatingString: "4.7",
        totalRatingsString: "50+",
      }
    },
    {
      info: {
        id: "830565",
        name: "Crusto's - Gourmet Cheese Burst Pizza",
        cloudinaryImageId: "c77fe42b7997c566f491e84b540701ca",
        locality: "Gariahat",
        areaName: "Rash Behari Avenue",
        costForTwo: "₹300 for two",
        cuisines: [
          "Pizzas",
          "Pastas",
          "Fast Food",
          "Snacks",
          "Beverages"
        ],
        avgRating: 4.3,
        parentId: "268955",
        avgRatingString: "4.3",
        totalRatingsString: "50+",
      }
    },
    {
      info: {
        id: "834825",
        name: "ENSO - Sourdough Pizza by Nomad",
        cloudinaryImageId: "5585f32b2ef84a5a951f635e87d853fe",
        locality: "Bally gunge",
        areaName: "Ballygunge",
        costForTwo: "₹850 for two",
        cuisines: [
          "Pizzas",
          "Fast Food",
          "Desserts",
          "Salads",
          "Beverages"
        ],
        avgRating: 3.9,
        parentId: "77344",
        avgRatingString: "3.9",
        totalRatingsString: "50+",
      }
    },
    {
      info: {
        id: "834808",
        name: "Nomad Pizza- Traveller Series",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/16/910a0476-820f-44dc-8e15-d4ae043baab7_834808.jpg",
        locality: "Bally Gunge",
        areaName: "Ballygunge",
        costForTwo: "₹850 for two",
        cuisines: [
          "Pizzas",
          "Fast Food",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4.3,
        parentId: "251919",
        avgRatingString: "4.3",
        totalRatingsString: "100+",
      }
    },
  ];


const Body = () => {
  return (
    <div>
      <div className="search">Search</div>
      <div className="res-container">
        {/* {resObj.map((restaurant, index) => (
          <Res_Card resData={restaurant.info} />
        ))} */}
        {resObj.map((restaurant) => (
          <Res_Card key={restaurant.info.id} resData={restaurant.info} />
        ))} 
        {/* <Res_Card resData={resObj} /> */}
      </div>
    </div>
  );
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

export default AppLayout;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
