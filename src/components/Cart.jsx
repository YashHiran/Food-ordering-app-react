import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import {CurrencyFormatter} from "../utils/CurrencyFormatter";
import Modal from "../UI/Modal";
import { Button } from "../UI/Button";
import { UserProgressContext } from "../store/UserProgressContext";
import CartItem from "./CartItem"

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const amount = cartCtx.items.reduce((totalAmount, item) => {
    return totalAmount + item.price * item.quantity;
  }, 0);

  const closeCartModalHandler = () => {
    userProgressCtx.setCartClosed();
  }

  const handleCheckout = () => {
    userProgressCtx.setCheckoutOpen();
  }

  return (
    <Modal classname="cart" open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart' ? closeCartModalHandler : null}>
      <h2> Your Cart </h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onIncrease={() => cartCtx.addItem(item)}
          onDecrease={() => cartCtx.removeItem(item.id)}
        />
        ))}
      </ul>
      <p className="cart-total"> {CurrencyFormatter.format(amount)} </p>
      <p className="modal-actions">
        <Button textOnly onClick= {closeCartModalHandler}> Close </Button>
        {cartCtx.items.length > 0 &&  <Button onClick={handleCheckout}> Go to checkout </Button> }
      </p>
    </Modal>
  );
}
