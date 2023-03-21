import { ProductType } from "../context/ProductsProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";
import { ReactElement } from "react";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {
  // Note: some new for Vite!
  // the old style `const img:string =require('../images/${product.sku}.jpg')` is not supported by Vite
  //now for vite
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href; //that will return a string we can refer to the image, we are dynamically creating the path to the image
  console.log(img);

  const onAddToCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.ADD,
      payload: { ...product, qty: 1 },
    });

  const itemInCart = inCart ? " → Item in Cart: ✔️" : null;
  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="product__img" />
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  );

  return content;
};

export default Product;
