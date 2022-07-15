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
          <h2>title: {product.title}</h2>
          <p>price: {product.price} </p>
        </>
      )}
    </>
  );
}

export default Details;
