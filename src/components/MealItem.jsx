
import { CurrencyFormatter } from "../utils/CurrencyFormatter";
import { Button } from "../UI/Button";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function MealItem({ meal }) {
  // console,log('In meal item')
  // console.log(props.meal.name);
  const cartCtx = useContext(CartContext);

  const addItemToCart = ()=>{
    cartCtx.addItem(meal);
    console.log(cartCtx.items);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{CurrencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick= {addItemToCart}> Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
