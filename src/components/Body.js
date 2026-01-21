import RestaurentCard from "./RestaurentCard";
import resList from "../utils/resList";

const Body = () => {
    return(
        <div className="body">
            <div className="search">searchBar</div>
            <div className="res-container">
                {
                    resList.map((restaurant) => (<RestaurentCard key={restaurant.info.id} resData={restaurant} />))
                    //Using the array index as a key is risky when the list changes dynamically (items are added, removed, or reordered):
                    //but it still is better to use index as key than no key at all
                    //Using the index is acceptable if the list is static and never reordered, deleted, or inserted.
                }
                
            </div>
        </div>
    )
}

export default Body;