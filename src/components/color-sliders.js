import React from "react";
import { css } from "@emotion/css";

function ColorSliders() {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 0%;
        background: white;
        opacity: 0;
        padding: 1rem;
        width: 80%;
        border-top-right-radius: 1rem;
        border-top-left-radius: 1rem;
        pointer-events: none;
        transform: translateY(100px);
        transition: all 0.5s ease-in-out;
      `}
    >
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
