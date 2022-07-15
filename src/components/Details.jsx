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
          <p>price: {product.price} </p>
        </>
      )}
    </>
  );
}

export default Details;
