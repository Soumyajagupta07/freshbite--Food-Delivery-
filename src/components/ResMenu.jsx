import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

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

    // const {name, cuisine, avgrating, costfortwo} = resMenu.cards[2]?.card?.card?.info;
    console.log(resMenu);
    if(resMenu === null) return <Shimmer/>
    return (
        <div>
            <h1>{resMenu?.cards[2]?.card?.card?.info?.name}</h1>
            <h2>{resMenu?.cards[2]?.card?.card?.info?.costForTwo}</h2>
            <ul>
                <li>Biryani</li>
                <li>Momo</li>
                <li>Pizza</li>
            </ul>
        </div>
    );
};
export default ResMenu;