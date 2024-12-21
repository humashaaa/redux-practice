import { useState } from "react";
import Component1 from "./Components/Component1";
import TotalCount from "./Components/TotalCount";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Features/Counter/counterSlice";



const Home = () => {
const counters = useSelector(state => state.counters)
const dispatch = useDispatch()
  // increment
  const handleIncrement = (id) => {
    dispatch(increment(id))
  };

  //   decrement
  const handleDecrement = (id) => {
    dispatch(decrement(id))
  };

//   total count
const totalCount = counters.reduce((prev, current) => prev + current.value, 0 )

  return (
    <div>
      <h1 className="font-bold text-center text-4xl">Redux</h1>
      <div>
        {counters.map((counter) => (
          <Component1
            value={counter.value}
            handleIncrement={() => handleIncrement(counter.id)}
            handleDecrement={() => handleDecrement(counter.id)}
            key={counter.id}
          />
        ))}

        {/* total */}
        <TotalCount totalCount={totalCount} />
      </div>
    </div>
  );
};

export default Home;
