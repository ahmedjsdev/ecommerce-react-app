import ProductCard from "./ProductCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from 'axios';

import {useEffect, useState} from 'react'

function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
  
      axios.get("https://api.storerestapi.com/products").then((res) => {
        setProducts(res.data.data)
      })
  
    }, [])

    return(
        <Row className="my-5">
          {
            products.map((product) => (
              <Col md="3" key={product._id}>
                <ProductCard product={product} />
              </Col>
            ))
          }
          

        

        </Row>
    )
}


export default Home;