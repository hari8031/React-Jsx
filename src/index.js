/**
 * *import the react and reactdom libraries
 */

import React from "react";
import ReactDom from "react-dom/client";

/**
 * *get a reference to the div with  ID root
 */

const element = document.getElementById("root");

/**
 * *Tell React to take control of that element (root)
 */

const root = ReactDom.createRoot(element);

/**
 * *Create a component
 */

const App = () =>{
    const inputType = 'number'
    const minValue = 5
    const style = {color:"red"}
     return <input type={inputType} min={minValue} style={style}/>
}

/**
 * *show the component on the screen
 */

root.render(<App />);
