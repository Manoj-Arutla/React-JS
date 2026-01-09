import React from "react";
import ReactDOM from "react-dom/client";

//React Element
let jsxHeading  = (
    <h1>
    React from JSX
    </h1>
);

//React functional Component 
//--> a function that returns JSX code(react element) is a functional  component 
//Components must start with a capital letter
let FunctionalComponent = () => {
    return (
        <div>
            <h1>Thunder</h1>
            <h2>Emperor</h2>
        </div>
    )
}

//shorter syntax: let FunctionalComponent = () => <h1>inferno</h1>


let root = ReactDOM.createRoot(document.getElementById("root"));

console.log(jsxHeading);//you can see an object in the console, at the end of the day React elements are JS objects

root.render(<FunctionalComponent/>); // React calls FunctionalComponent() internally when rendering