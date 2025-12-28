
import React, { useState, useMemo, useCallback } from "react";
import products from "./Products";
import ProductList from "./components/ProductList";

function App() {
  const [count, setCount] = useState(0);

  // ✅ useMemo: expensive calculation
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  // ✅ useCallback: stable function reference
  const handleSelectProduct = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <ProductList
        products={products}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}

export default App;
