import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ title, subtitle, especifications, price }) =>{
    return(
        <div>
            <p>{title}</p>
            <p>{subtitle}</p>
            <p>{especifications}</p>
            <p>{price}</p>
        </div>
    )
}

export default ItemListContainer;
