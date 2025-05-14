import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  let num1 = 8
  const num2 = num1
  num1 = num1 + 2
  const [products, setProducts] = useState([
    { id: 1, name: "Titanium Exhaust", price: 50000, stock: 3 },
    { id: 2, name: "HKS Race Intake", price: 21000, stock: 2 },
    { id: 3, name: "Turbo Charger BOK", price: 200000, stock: 1 },
    { id: 4, name: "Super Charger", price: 110000, stock: 4 },
  ]);

  const handleBuy = (id, name) => {
    alert(`You bought ${name}!`);

    setProducts((prevProducts) =>
      prevProducts
        .map((product) =>
          product.id === id
            ? { ...product, stock: product.stock - 1 }
            : product
        )
        .filter((product) => product.stock > 0)
    );
  };

  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString("en-PK")}`;
  };

  return (
    <div>
      <header style={{
        backgroundColor: "#ff3c00",
        padding: "20px",
        textAlign: "center",
        color: "white",
        fontSize: "1.8rem",
        fontWeight: "bold",
        letterSpacing: "1px",
        textTransform: "uppercase",
      }}>
         AutoXtreme Garage
      </header>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
        justifyContent: "center"
      }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
           product={product}
            handleBuy={handleBuy}
            formatPrice={formatPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;