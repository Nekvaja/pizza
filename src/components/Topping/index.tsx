import Check from '../Check';
import type { ITopping } from '../../models/Topping';
import './style.css';

interface IToppingProps {
  topping: ITopping;
  onChecked: (checked : boolean) => void;
}

const Topping = ({ topping, onChecked }: IToppingProps) => {

  return (
    <div className="topping">
      <Check checked={topping.selected} onChecked={onChecked}/>
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
