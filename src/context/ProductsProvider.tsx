import { createContext, ReactElement, useEffect, useState } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};
// we also can do the json server in a Dev environment and then use the fetch api to get the data from the server
// This for JSON server, choose Json server or hard coded data
//const initState: ProductType[] = [];

const initState: ProductType[] = [
  {
    sku: "item0001",
    name: "Widget",
    price: 99.9,
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 199.9,
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 299.9,
  },
];
export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };
const ProductsContext = createContext<UseProductsContextType>(initContextState);
//from the context lesson, we need to provide the children type as we create provider in react 18 and above. It used to be ok to have that implicit in old version.
type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);
  // This for JSON server
  //useEffect(() => {
  //   const fetchProducts = async (): Promise<ProductType[]> => {
  //     const data = await fetch("http://localhost:3500/products")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .catch((err) => {
  //         if (err instanceof Error) console.log(err.message);
  //       });
  //     return data;
  //   };
  //   fetchProducts().then((products) => setProducts(products));
  // }, []);
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
//we wrap around the children, notice they are not passed in like we would a prop like the products for example it's acctually what's between the opening and closing tags of the component
export default ProductsContext;
