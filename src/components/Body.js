import RestaurentCard from "./RestaurentCard";
import resList from "../utils/resList";
import { useState, useEffect } from "react";

const Body = () => {
    const allRestaurents = resList;
    let [restaurentList, setRestaurentList] = useState(resList); 
    //useState() is a react hook which returns a state variable
    //useState([whatever here]) will be passed to restaurentList
    //setRestaurentList is called to update the restaurent list
    //whenever the state variable changes/updates, React re-renders the component

    const filter = () => {
         const filteredList = allRestaurents.filter((res) => res?.info?.avgRating>4);
         setRestaurentList(filteredList); //it updates the filtered list into restaurentList
    }

    const reset = () => {
        setRestaurentList(allRestaurents);
    }

    useEffect(() => {
        //after component is rendered, the callback function is executed.
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?lat=17.5080616&lng=78.49944789999999&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1");
        const json = await data.json()
        console.log(json);
    }

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={filter}
                >
                Top Rated Restaurents
                </button>

                <button className="filter-btn"
                onClick={reset}
                >
                All Restaurents
                </button>
            </div>
            <div className="res-container">
                {
                    restaurentList.map((restaurant) => (<RestaurentCard key={restaurant?.info?.id} resData={restaurant} />))
                    //Using the array index as a key is risky when the list changes dynamically (items are added, removed, or reordered):
                    //but it still is better to use index as key than no key at all
                    //Using the index is acceptable if the list is static and never reordered, deleted, or inserted.
                }
                
            </div>
        </div>
    )
}

export default Body;