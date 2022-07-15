import axios from "axios";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function Details() {
  const [product, setProduct] = useState(null);


  const { productSlug } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.storerestapi.com/products/${productSlug}`)
      .then((res) => {
        setProduct(res.data.data);
      });
  }, [productSlug]);

  return (
    <>
      {product && (
        <>
          <h1>title: {product.title}</h1>
          <h2>title: {product.title}</h2>
          <p>price: {product.price} </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est neque quisquam dolor repellendus ab quam voluptates aspernatur corporis perspiciatis, cumque quae autem veniam porro blanditiis amet, suscipit, quasi rem voluptate.</p>
        </>
      )}
    </>
  );
}

export default Details;
