import React from 'react'
import Image from './Image';
import Price from './Price';
import Description from './Description';
import Name from './Name';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from './Product';
const Cards = () => {
  return (
    <div>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.imageURL} />
    <Card.Body>
      <Card.Title>
        <Name/>
     </Card.Title>
      <Card.Text>
      <Description/>
      </Card.Text>
      <Card.Text>
      <Price/>
      </Card.Text>
    </Card.Body>
  </Card></div>
  )
}

export default Cards