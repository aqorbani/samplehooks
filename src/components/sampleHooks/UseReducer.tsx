import { useReducer } from "react";

interface State {
  count: number;
}

enum ActionType {
  Increment = "INCREMENT",
  Decrement = "DECREMENT",
}
interface Action {
  type: ActionType;
  payload: number;
}

const initialState: State = { count: 0 };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.Increment:
      return { count: state.count + action.payload };
    case ActionType.Decrement:
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

const UseReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{state.count}</p>
      <button
        onClick={() => dispatch({ type: ActionType.Increment, payload: 1 })}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: ActionType.Decrement, payload: 1 })}
      >
        Decrement
      </button>
    </div>
  );
};
export default UseReducer;
