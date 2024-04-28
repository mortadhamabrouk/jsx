
import React from "react";
import { Card } from "react-bootstrap";
import product from "./Product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const App = () => {
  const { name, price, description, image } = product;

  return (
    <div className="container">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Name name={name} />
          <Price price={price} />
          <Description description={description} />
          {/* Pass the 'src' and 'alt' attributes separately */}
          <Image src={image.src} alt={image.alt} />
        </Card.Body>
      </Card>
      <p>Bonjour, là !</p>
    </div>
  );
};

export default App;
