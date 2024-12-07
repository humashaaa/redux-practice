import { useState } from "react";
import Component1 from "./Components/Component1";
import TotalCount from "./Components/TotalCount";

const initialCounters = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

const Home = () => {
  const [counters, setCounters] = useState(initialCounters);

  // increment
  const handleIncrement = ({ id }) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === id) {
        return { ...counter, value: counter.value + 1 };
      } else {
        return counter;
      }
    });

    setCounters(updatedCounters);
  };

  //   decrement
  const handleDecrement = ({ id }) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === id) {
        return { ...counter, value: Math.max(0, counter.value - 1) };
        //   to prevent (-)ve num
      } else {
        return counter;
      }
    });

    setCounters(updatedCounters);
  };

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
        <TotalCount />
      </div>
    </div>
  );
};

export default Home;
