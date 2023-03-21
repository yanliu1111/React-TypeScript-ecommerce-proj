import useCart from "../hooks/useCart";
import { useState } from "react";
import CartLineItem from "./CartLineItem";

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  //use a ternary operator to display the cart or the confirmation message
  const pageContent = confirm ? (
    <h2>Thank you for your order.</h2>
  ) : (
    <>
      <h2 className="offscreen">Cart</h2>
      <ul className="cart">
        {cart.map((item) => {
          return (
            <CartLineItem
              key={item.sku}
              item={item}
              dispatch={dispatch} //which remembers it already has referential equality so it will not cause a re-render
              REDUCER_ACTIONS={REDUCER_ACTIONS} //we did memoize inside of the context it will not cause a re-render either
            />
          );
        })}
      </ul>
      <div className="cart__totals">
        <p>Total Items: {totalItems}</p>
        {/* from context */}
        <p>Total Price: {totalPrice}</p>
        <button
          className="cart__submit"
          disabled={!totalItems}
          // !totalItems means essentially if there are no items in the cart then disable the button
          onClick={onSubmitOrder}
        >
          Place Order
        </button>
      </div>
    </>
  );
  const content = <main className="main main--cart"> {pageContent}</main>;

  return content;
};

export default Cart;
