import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./../App.css";
import Shimmer from "./Shimmer";
import ResCategory from "./ResCategory";

const ResMenu = () => {
    const [resMenu, setResMenu] = useState([]);
    const { resid } = useParams();
    useEffect (() =>{
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const res = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5031504&lng=88.35115900000001&restaurantId='+resid);

        
        const data = await res.json();
        setResMenu(data.data);
        
    }

    // const {name, cuisine, avgrating, costfortwo} = resMenu.cards[2]?.card?.card?.info;    //error for the next if statement
    console.log(resMenu);
    if(resMenu === null) return <Shimmer/>

    const cardInfo = resMenu.cards?.[2]?.card?.card?.info;
    const itemCards = resMenu.cards?.[2]?.card?.card?.itemCards || [];
    console.log(resMenu.cards?.[2]?.card?.card);
    
    const catergories = resMenu.cards?.[2]?.card?.card?.filter((c)=>{
        return c.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });
    console.log(catergories);

    if (!cardInfo) {
        return <div>Data not available</div>;
    }

    const { name, cuisines, avgRating, costForTwo } = cardInfo;

    return (
        // <div>
        //     <h1>{name}</h1>
        //     <h2>{costForTwo}</h2>
        //     <h2>{cuisines?.join(', ')}</h2>
        //     <h2>{avgRating}</h2>
        //     <ul>
        //         {itemCards.map((item, index) => (
        //             <li key={index}>{item.card?.info?.name}</li>
        //         ))}
        //     </ul>
        // </div>

        <div className="text-center">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwo}
            </p>
            <h3>Rating: {avgRating}</h3>
            {catergories.map((category, index) => (
                <><ResCategory /><div key={index}>
                    <h4>{category?.card?.card?.title}</h4> {/* Display category title */}
                    <p>Items: {category?.card?.card?.itemCards.length}</p> {/* Display number of items in the category */}

                    {/* Accordion component for category */}
                    <ResCategory data={category?.card?.card} />
                </div></>
            ))}
        </div>
    );
};
export default ResMenu;