import React, {} from "react";

export default function ItemList({items}){
    return(
        <div>
            {items.map((item, i) =>{
                return(
                    <div key={i}>
                        <h1>{item.title}</h1>
                    <div>
                        <p>
                            id{item.id} nombre {item.title} precio:{item.price}
                        </p>
                    </div>
                    </div>
                );
            })}
        </div>
    );
}


