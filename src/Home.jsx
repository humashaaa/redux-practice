import { useState } from "react";
import Component1 from "./Components/Component1";
import TotalCount from "./Components/TotalCount";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Features/Counter/counterSlice";

const Home = () => {
  const counters = useSelector((state) => state.counters);

  

  return (
    <div>
      <h1 className="font-bold text-center text-4xl">Redux</h1>
      <div>
        {counters.map((counter) => (
          <Component1
            id={counter.id}
            key={counter.id}
          />
        ))}

        {/* total */}
        <TotalCount />
      </div>
    </div>
  );
};

export default Home;
