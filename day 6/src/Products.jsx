import { Link } from "react-router-dom";

function Products() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
  ];

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>

          <Link to={`/products/${product.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </>
  );
}

export default Products;