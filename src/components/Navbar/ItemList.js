import React from "react";

export default function ItemList({ productos }) {
  return (
    <div>
      {productos.map((producto, i) => {
        return (
          <div key={i}>
            <h1>{producto.name}</h1>
            <div>
              <p>
                id {producto.id} nombre {producto.name} y el precio es:
                {producto.price}
              </p>
              <br />
              <br />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/*<Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{producto.name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>*/