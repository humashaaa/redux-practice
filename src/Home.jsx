import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";

const Home = () => {
    return (
        <div>
            <h1 className="font-bold text-center text-4xl">Redux</h1>
            <div>
                <Component1></Component1>
                <Component2></Component2>

                {/* total */}
                <div className="space-x-3 bg-slate-200 shadow-lg p-16 mt-10 w-96 h-36 mx-auto">
               <p className="text-center font-bold"> TOTAL : </p>
                </div>
            </div>
        </div>
    );
};

export default Home;