import { memo } from "react";

interface Props {
  number?: number;
  clickHandler?: () => void;
}

const Child: React.FC<Props> = ({ number, clickHandler }) => {
  console.log("child rendered");
  return (
    <div>
      <p>Child:{number}</p>
      <button onClick={clickHandler}>+child</button>
    </div>
  );
};

export default memo(Child);
