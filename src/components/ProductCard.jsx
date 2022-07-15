import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Card style={{ marginBottom: "20px" }}>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.category.name}</Card.Text>

        <Card.Text>Price : {product.price} $</Card.Text>
        <Link className="btn btn-primary" to={"/details/"+ product.slug}  variant="primary">Details</Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
