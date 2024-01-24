import React from "react";
import { ColorSliders } from "./color-sliders";
import { ColorControls, ControlPanels, ControlContainers } from "./color-controls";

function Colors() {
  return (
    <>
      <div className="Colors">
        <div className="color">
          <h2>Hex</h2>
          <ColorControls />
          <ColorSliders />
        </div>
        <div className="color">
          <h2>Hex</h2>
          <ColorControls />
          <ColorSliders />
        </div>
        <div className="color">
          <h2>Hex</h2>
          <ColorControls />
          <ColorSliders />
        </div>
        <div className="color">
          <h2>Hex</h2>
          <ColorControls />
          <ColorSliders />
        </div>
        <div className="color">
          <h2>Hex</h2>
          <ColorControls />
          <ColorSliders />
        </div>
      </div>
      <ControlPanels />
      <ControlContainers />
    </>
  );
}

export { Colors };
