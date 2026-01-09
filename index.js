import React from "react";
import ReactDOM from "react-dom/client";

//React Element
let elem = <span>(element inside another element)</span>
let jsxHeading  = (
    <div>
        <h1>
    React from JSX
    </h1>
    {elem}
    </div>
);
//here we have React element inside another React element


//you can make this element as a functional component and you can use this inside the FunctionalComponent like Fc2

let Fc2 = () => (<h2>2<sup>nd</sup> FunctionalComponent</h2>)


//React functional Component 
//--> a function that returns JSX code(react element) is a functional  component 
//Components must start with a capital letter

let number = 9;
let FunctionalComponent = () => {
    return (
        <div>
            <h1>Thunder</h1>
            {jsxHeading}
            {console.log(number)}
            <h2>Emperor</h2>
            <Fc2/>
        </div>
        //always return as a single element, otherwise you'll get an error
        //<JsxHeading/>placeing this inside the above div wil render JsxHeading component into FunctionalComponent
        //this is called Component Composition --> component inside another component
        //--> {} : you can write any javaScript code inside the curly braces
        //you can even pass React components inside the {} as "jsxHeading" is a JS variable
        )
}

//shorter syntax: let FunctionalComponent = () => <h1>inferno</h1>


let root = ReactDOM.createRoot(document.getElementById("root"));

console.log(jsxHeading);//you can see an object in the console, at the end of the day React elements are JS objects

root.render(<FunctionalComponent/>); // React calls FunctionalComponent() internally when rendering