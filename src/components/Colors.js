import React from "react";
import { HexSection } from "./color-hex";
import { LibraryButton } from "./color-menu";
import { css } from "@emotion/css";
import "../fonts/Mulish-Regular.ttf";

function Colors() {
  return (
    <>
      <div
        className={css`
          display: flex;
          font-family: "Poppins", sans-serif;
        `}
      >
        <HexSection title="Hex 1" />

        <HexSection title="Hex 2" />

        <HexSection title="Hex 3" />

        <HexSection title="Hex 4" />

        <HexSection title="Hex 5" />
      </div>
      <LibraryButton />
    </>
  );
}

export { Colors };
