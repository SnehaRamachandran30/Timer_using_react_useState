import React, { useState } from "react";

function App() {
  const t = new Date().toLocaleTimeString();
  const [time, timer] = useState(t);
  function tim() {
    const newt = new Date().toLocaleTimeString();
    return timer(newt);
  }
  /* setInterval(tim,1000); */
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={tim}>Get Time</button>
    </div>
  );
}

export default App;
