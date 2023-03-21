import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//similar index.jsx in CRA, in Vite tsx, I used main.tsx
import { CartProvider } from "./context/CartProvider";
import { ProductsProvider } from "./context/ProductsProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
