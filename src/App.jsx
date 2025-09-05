import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); {/*--- Create count and setCount variable ---*/}
  return (
    <>
      <div className="bg-[#081410] h-screen w-screen">
        <div className="flex justify-center items-center h-screen">
          <div className="card bg-[#193c2f] p-15 shadow-sm">
            <figure className="px-10 pt-10 flex justify-center mb-10">
              {/*--- Count --*/}
              <h1>{count}</h1>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[32px]">React Counter App</h2>
              <p className="mb-10">
                Click the button below to add or decrease the counter!
                Made by Dutch Restarts
              </p>
              <div className="card-actions flex justify-center gap-15">
                {/*--- Add more to count ---*/}
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>+</button>
                {/*--- Subtract from count ---*/}
                <button className="btn btn-primary" onClick={() => setCount(count - 1)}>-</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
