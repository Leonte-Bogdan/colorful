import React from "react";
import { css } from "@emotion/css";
import { CopyPopup, SliderPopup } from "./color-popups";
import { ColorControls } from "./color-buttons";
import chroma from "chroma-js";

const generateHexColor = () => chroma.random().hex();

function HexSection({ title }) {
  const [hexColor, setHexColor] = React.useState(generateHexColor());
  const changeColors = () => {
    setHexColor(generateHexColor());
  };
  const [popupVisible, setPopupVisible] = React.useState(false);
  const [sliderPopupVisible, setSliderPopupVisible] = React.useState(false);

  const openSliderPopup = () => {
    setSliderPopupVisible(true);
  };

  const closeSliderPopup = () => {
    setSliderPopupVisible(false);
  };

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div
      className={css`
        min-height: 80vh;
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        position: relative;
        overflow: hidden;
        background: ${hexColor};
        margin: 0;
      `}
    >
      <h2
        onClick={openPopup}
        className={css`
          cursor: pointer;
        `}
      >
        Hex
      </h2>

      <ColorControls
        hexColor={hexColor}
        changeColors={changeColors}
        sliderPopupVisible={sliderPopupVisible}
        openSliderPopup={openSliderPopup}
        closeSliderPopup={closeSliderPopup}
      />
      {sliderPopupVisible && <SliderPopup onClose={closeSliderPopup} sliderPopupVisible={sliderPopupVisible} />}
      {popupVisible && <CopyPopup onClose={closePopup} />}
    </div>
  );
}

export { HexSection };
