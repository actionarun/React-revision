import React, { useState } from "react";

function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 }
  ]);

  function updatePrice(id) {
    setProducts(
      products.map((product) =>
        product.id === 2
          ? { ...product, price: 25000 }
          : product
      )
    );
  }

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <h1>{product.price}</h1>

         
        </div>
      ))}
       <button onClick={() => updatePrice(product.id)}>
            Update
          </button>

    </>
  );
}

export default Products;