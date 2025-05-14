import React from "react";

function ProductCard({product, handleBuy, formatPrice }) {
 const {id, name, price, stock} = product
  const handleClick = () => {
    handleBuy(id, name);
  };

  return (
    <div style={{
      border: "2px solid #ff3c00",
      padding: "16px",
      width: "220px",
      borderRadius: "10px",
      textAlign: "center",
      backgroundColor: "#2a2a2a",
      boxShadow: "0 4px 8px rgba(255, 60, 0, 0.3)",
      color: "#fff"
    }}>
      <h3>{name}</h3>
      <p>{formatPrice(price)}</p>
      <p>stock:{stock}</p>
      <button onClick={handleClick}>Buy</button>
    </div>
  );
}

export default ProductCard;