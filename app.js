import React  from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.designevo.com/res/templates/thumb_small/location-takeaway-icon.webp"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const RestaurentCard = ({resName, cuisine, rating, deliveryTime}) => { 
    //this is same as--> const {resName, cuisine, rating, deliveryTime} = props (destructuring)
    return(
        <div className="res-card" style = {{backgroundColor: "#f0f0f0"}}>
            <img className="res-img" 
            alt="restarentImg" 
            src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1704283720/afecca022851255d6eb0b025c9aeaaa3.jpg"/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{deliveryTime}</h4>
            
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">searchBar</div>
            <div className="res-container">
                <RestaurentCard 
                resName = "Nawab's"
                cuisine = "Biryani, South Indian"
                rating = "4.5"
                deliveryTime = "38 mins"
                />
                <RestaurentCard
                resName = "KFC"
                cuisine = "Fried Chicken, Burgers"
                rating = "4.3"
                deliveryTime = "45 mins"
                />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)