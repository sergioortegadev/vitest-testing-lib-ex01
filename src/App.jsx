import { useState } from "react";
import productsJson from "../db.json";
import "./App.css";
import { changeOrderByPriceUp, changeOrderByPriceDown } from "./helpers/changeOrderByPrice";
import ProductList from "./components/ProductList";

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState(productsJson.products);

  return (
    <>
      <h1>Products List</h1>
      <div className="cards">
        <h4>Ordenar por</h4>
        <button onClick={() => setProducts(changeOrderByPriceUp(products))}>menor precio</button>
        <button onClick={() => setProducts(changeOrderByPriceDown(products))}>mayor precio</button>
        <ProductList products={products} />
      </div>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
