import React from "react";

import { ColorButtons } from "./color-buttons";
import { HexSection } from "./color-hex";
import { css } from "@emotion/css";

function Colors() {
  return (
    <>
      <div
        className={css`
          min-height: 45rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        `}
      >
        <HexSection title="Hex 1" />

        <HexSection title="Hex 2" />

        <HexSection title="Hex 3" />

        <HexSection title="Hex 4" />

        <HexSection title="Hex 5" />
      </div>

      <ColorButtons />
    </>
  );
}

export { Colors };
