import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-zinc-900 h-screen w-screen">
        <div className="flex justify-center items-center h-screen">
          <div className="card bg-base-100 p-15 shadow-sm">
            <figure className="px-10 pt-10 flex justify-center mb-10">
              <h1>0</h1>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">React Counter App</h2>
              <p>
                Click the button below to add or decrease the counter!
                Made by Dutch Restarts
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
