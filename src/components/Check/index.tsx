import './style.css';


interface CheckedProps {
  checked: boolean;
  onChecked: (checked : boolean) => void;
}



const Check = ({checked, onChecked} : CheckedProps)  => {

  return (
    <button
      className="check"
      onClick={() => onChecked(!checked)}
    >
      {checked ? '✓' : ''}
    </button>
  )
};

export default Check;
