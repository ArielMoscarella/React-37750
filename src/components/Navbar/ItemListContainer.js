import React from "react";
import ItemList from "./ItemList";
import ItemCount from "../Navbar/ItemCount";


export default function ItemListContainer() {
    return(
        <div>
            <ItemList/>
            <ItemCount/>
        </div>
        
    );
}

