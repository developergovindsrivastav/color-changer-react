import React from "react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("yellow");
  return (
    <div
      className=" w-full h-screen flex justify-center items-end flex-wrap "
      style={{ backgroundColor: color }}
    >
      <div className=" h-20 w-full text-black-900 mb-10 text-2xl flex items-center gap-4">
        <button
          onClick={() => setColor("red")}
          className=" bg-red-800 h-10 w-16 rounded-2xl text-white p-1 ml-2"
        >
          red
        </button>
        <button
          onClick={() => setColor("green")}
          className=" bg-green-800 h-10 w-18 rounded-2xl text-white p-1 ml-2"
        >
          green
        </button>
        <button
          onClick={() => setColor("black")}
          className=" bg-black h-10 w-18 rounded-2xl text-white p-1 ml-2"
        >
          black
        </button>
        <button
          onClick={() => setColor("violet")}
          className=" bg-violet-800 h-10 w-18 rounded-2xl text-white p-1 ml-2"
        >
          violet
        </button>
      </div>
    </div>
  );
}
export default App;
