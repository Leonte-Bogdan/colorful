import React from "react";

function ColorSliders() {
  return (
    <div className="Sliders">
      <button className="close-adjustment">X</button>
      <span>Hue</span>
      <input type="range" min="0" max="360" step="1" name="hue" className="hue-input" data-hue="0" />
      <span>Brightness</span>
      <input type="range" min="0" max="1" step="0.01" name="brightness" className="bright-input" data-bright="0" />
      <span>Saturation</span>
      <input type="range" min="0" max="1" step="0.01" name="saturation" className="sat-input" data-sat="0" />
    </div>
  );
}

export { ColorSliders };
