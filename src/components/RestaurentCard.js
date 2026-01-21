import { RESIMG_URL } from "../utils/constants";

const RestaurentCard = (props) => { 
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info//here ? indicates optional chaining.
    //it ensures that if resData is null or undefined it wont throw an error. if resData is undefined it evaluates undefined,
    //and the destructuring will also give undefined for  the variables.    
    return(
        <div className="res-card" style = {{backgroundColor: "#f0f0f0"}}>
            <img className="res-img" 
            alt="restarentImg" 
            src={
                RESIMG_URL + 
                cloudinaryImageId
            }
            />
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{costForTwo}</h3>
            <h3>{resData.info.sla.deliveryTime} mins</h3>
                        
            
        </div>
    )
}

export default RestaurentCard;