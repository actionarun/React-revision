function Product({ name, price, stock }) {
  return (
    <>
      <p>Product: {name}</p>
      <p>Price: ₹{price}</p>
      <p>Stock: {stock}</p>
      <p>Status: {stock > 0 ? "Available" : "Unavailable"}</p>
    </>
  );
}

export default Product;