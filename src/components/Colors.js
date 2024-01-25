import React from "react";
import { ColorSliders } from "./color-sliders";
import { ColorControls, ControlPanels, ControlContainers } from "./color-panels";
import { css } from "@emotion/css";

function Colors() {
  return (
    <>
      <div
        className={css`
          min-height: 40rem;
          display: flex;
          color: rgb(112, 108, 108);
        `}
      >
        <div
          className={css`
            height: 40rem;
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            position: relative;
            overflow: hidden;
          `}
        >
          <h2>Hex</h2>
          <ColorControls />
          <ColorSliders />

          <h2>Hex</h2>
          <ColorControls />
          <ColorSliders />

          <h2>Hex</h2>
          <ColorControls />
          <ColorSliders />

          <h2>Hex</h2>
          <ColorControls />
          <ColorSliders />

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
