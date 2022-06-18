import React from "react";
import "./ItemListContainer.css";
import ItemCount from "../Navbar/ItemCount";

const ItemListContainer = ({ title, subtitle, especifications, price }) =>{
    return(
        <div>
            <p>{title}</p>
            <p>{subtitle}</p>
            <p>{especifications}</p>
            <p>{price}</p>
            <br/>
            <ItemCount/>
        </div>
        
    )
}

export default ItemListContainer;
