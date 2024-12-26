import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Features/Counter/counterSlice";

const Component1 = ({  id }) => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();
  // increment
  const handleIncrement = (id) => {
    dispatch(increment(id));
  };
  
  //   decrement
  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };

  return (
    <div className="space-x-3 bg-slate-200 shadow-lg p-16 mt-10 w-96 h-48 mx-auto">
        {/* counters er state arr so i had to map */}
      <h1 className="font-bold text-center mb-5">Component : {counters.map(counter=>counter.id === id && counter.value)}</h1>
      <button
        onClick={()=>handleIncrement(id)}
        className="font-semibold text-white bg-blue-500 px-4 py-2.5"
      >
        Increment
      </button>
      <button
        onClick={()=>handleDecrement(id)}
        className="font-semibold text-white bg-rose-500 px-4 py-2.5"
      >
        Decrement
      </button>
    </div>
  );
};

export default Component1;
