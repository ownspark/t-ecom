import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating';
const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
          <a href={`/product/${product._id}`}  >
              <Card.Img src={product.image} variant='top' />
              
          </a>
          <Card.Body>
            <div className="list-group">
              <a href={`/product/${product._id}`} className="list-group-item list-group-item-action" >
                  <Card.Title as='div'>
                      <h5>
                          { product.name }
                    </h5>
                  </Card.Title>
              </a>
            </div>
              <Card.Text as='div'>
                  <Rating value={product.rating} text={`${product.numReviews} reviews`  } />
              </Card.Text> 
              <Card.Text as='h3'>${product.price} </Card.Text> 
              
          </Card.Body>
    </Card>
  )
}

export default Product