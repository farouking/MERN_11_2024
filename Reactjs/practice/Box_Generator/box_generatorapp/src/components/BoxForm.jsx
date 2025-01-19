import React, { useState } from "react";

function BoxForm({ addBox }) {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color.trim() && size.trim()) {
      addBox(color, parseInt(size));
      setColor("");
      setSize("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter color"
        className="input"
      />
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        placeholder="Enter size (px)"
        className="input"
      />
      <button type="submit" className="button">
        Add Box
      </button>
    </form>
  );
}

export default BoxForm;
