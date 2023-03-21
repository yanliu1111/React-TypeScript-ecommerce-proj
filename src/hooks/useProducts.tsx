import { useContext } from "react";
import ProductsContext from "../context/ProductsProvider";
import { UseProductsContextType } from "../context/ProductsProvider";

const useProducts = (): UseProductsContextType => {
  return useContext(ProductsContext);
};

export default useProducts;

// the reason why I create hook individually is because I want to use it in other components, for example, I want to use useProducts in ProductList component, so I create useProducts hook and import it in ProductList. The functonality of useProducts hook is to get the products state from ProductsProvider, so I can use it in ProductList component.
