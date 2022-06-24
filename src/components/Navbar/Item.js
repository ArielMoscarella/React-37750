import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";


export default function Item(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [items, setItems] = useState ([]);

    let objeto;
    const humano= (prompt("Es una persona fisica? Si/No")).toLowerCase;

    useEffect(() => {
        objeto = new Promise((res, rej) => {
          setTimeout(() => {
            if (humano="si") {
              res([
                { id: 1, title: "zapato nike", price: 100, pictureUrl },
              ]);
            } else {
              rej("No tengo items");
            }
          }, 2000);
        });
    
        objeto
          .then((resultado) => {
            setProductos(resultado);
          })
          .catch((err) => {
            setError(true);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);
    return(
        <div
        onClick={() => {
          console.log(x);
        }}
      >
        {loading && "Loading..."}
        {error && "ERROR: Fallo al ingresar"}
        {items && <ItemList item={items} />}
      </div>
    );
  }
