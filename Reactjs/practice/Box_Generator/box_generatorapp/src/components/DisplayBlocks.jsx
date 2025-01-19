import React from "react";

function DisplayBlocks({ boxes, removeBox }) {
  return (
    <div className="box-container">
      {boxes.map((box) => (
        <div key={box.id} className="box-wrapper">
          <div
            className="box"
            style={{
              backgroundColor: box.color,
              width: `${box.size}px`,
              height: `${box.size}px`,
            }}
          >
            <button
              onClick={() => removeBox(box.id)}
              className="remove-button"
            >
              ✖
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayBlocks;
