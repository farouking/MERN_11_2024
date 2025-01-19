import React, { useState } from "react";
import BoxForm from "./components/BoxForm";
import DisplayBlocks from "./components/DisplayBlocks";
import "./App.css";

function App() {
  const [boxes, setBoxes] = useState([]);

  // Add a new box to the state
  const addBox = (color, size) => {
    const newBox = { id: Date.now(), color, size };
      // spread operator
    setBoxes([...boxes, newBox]);
  };

  // Remove a box from the state
  const removeBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Resizable Boxes</h1>
      <BoxForm addBox={addBox} />
      <DisplayBlocks boxes={boxes} removeBox={removeBox} />
    </div>
  );
}

export default App;
