import { useSelector } from "react-redux";

const TotalCount = () => {
    const counters = useSelector((state) => state.counters);

    const totalCount = counters.reduce((prev, current) => prev + current.value, 0 )

    return (
        <div className="space-x-3 bg-slate-200 shadow-lg p-16 mt-10 w-96 h-36 mx-auto">
        <p className="text-center font-bold"> TOTAL : {totalCount} </p>
         </div>
    );
};

export default TotalCount;