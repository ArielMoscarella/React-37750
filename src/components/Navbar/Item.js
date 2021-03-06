import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

export default function Item(){
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productos, setProductos] = useState([]);

  let compra;
  let personaFisica= true

  useEffect(() => {
    compra = new Promise((res, rej) => {
      setTimeout(() => {
        if (personaFisica === true) {
          res([
            { id: 1, name: "Gabinete", price: 10000 },
            { id: 2, name: "Gabinete 2", price: 15000 },
            { id: 3, name: "Gabinete 3", price: 20000 },
          ]);
        } else {
          rej("No hay productos");
        }
      }, 2000);
    });

    compra
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

  return (
    <div
      onClick={() => {
        console.log(compra);
      }}
    >
      {loading && "Loading..."}
      {error && "Error en la carga"}
      {productos && <ItemList productos={productos} />}
    </div>
  );
}