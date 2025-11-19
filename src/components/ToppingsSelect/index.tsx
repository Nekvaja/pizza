import { useState } from "react";
import type { ITopping } from "../../models/Topping";
import Topping from "../Topping";
import './style.css';

interface IToppingsSelectProps {
  toppings: ITopping[]
}

const ToppingsSelect = ({ toppings }: IToppingsSelectProps) => {

  const [toppingsList, setToppingsList] = useState<ITopping[]>(toppings);

  const handleToppings = (index : number, checked : boolean) => {
    const newToppings = [...toppingsList];
    newToppings[index].selected = checked;
    setToppingsList(newToppings);
  }
 
  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: 0, total price: 0 Euro</p>

      <div className="toppings">
        {toppingsList.map((topping, index) => (
          <Topping topping={topping} key={topping.name} onChecked={(checked) => handleToppings(index, checked)}/>
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
