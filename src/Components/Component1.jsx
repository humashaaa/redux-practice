
const Component1 = ({handleIncrement, handleDecrement, value}) => {
    return (
        <div className="space-x-3 bg-slate-200 shadow-lg p-16 mt-10 w-96 h-48 mx-auto">
            <h1 className="font-bold text-center mb-5">Component : {value}</h1>
            <button onClick={handleIncrement} className="font-semibold text-white bg-blue-500 px-4 py-2.5">Increment</button>
            <button onClick={handleDecrement} className="font-semibold text-white bg-rose-500 px-4 py-2.5">Decrement</button>
        </div>
    );
};

export default Component1;