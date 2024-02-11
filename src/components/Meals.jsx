import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async() =>  {
      const meals = await fetch("http://127.0.0.1:3000/meals");
      if (!meals.ok) {
      }
      const mealss = await meals.json();
      setMeals(mealss);
    };

    fetchMeals();

  }, []);

  return (
    <ul id="meals" key={meals}>
        {meals.map(meal => (
            <MealItem  meal={meal}/>
        ))}
    </ul>
  );
}
