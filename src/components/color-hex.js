import React from "react";
import { css } from "@emotion/css";
import { CopyPopup, SliderPopup } from "./color-popups";
import { ColorControls } from "./color-buttons";
import chroma from "chroma-js";
import { CopyToClipboard } from "react-copy-to-clipboard";

const generateHexColor = () => chroma.random().hex();

function HexSection({ title }) {
  const checkColorContrast = (hexColor) => {
    const luminance = chroma(hexColor).luminance();
    const textColor = luminance > 0.5 ? "black" : "white";
    return {
      color: textColor,
      luminance: luminance,
    };
  };
  const [hexColor, setHexColor] = React.useState(generateHexColor());
  const changeColors = () => {
    setHexColor(generateHexColor());
  };

  const handleSliderChange = (event) => {
    const newHue = event.target.value;
    setHexColor(chroma.hsl(newHue, 1, 0.5).hex());
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
      <CopyToClipboard text={hexColor}>
        <h2
          onClick={() => {
            openPopup();
          }}
          className={css`
            cursor: pointer;
            color: ${checkColorContrast(hexColor).color};
          `}
        >
          {hexColor}
        </h2>
      </CopyToClipboard>

      <ColorControls
        checkColorContrast={checkColorContrast}
        hexColor={hexColor}
        changeColors={changeColors}
        sliderPopupVisible={sliderPopupVisible}
        openSliderPopup={openSliderPopup}
        closeSliderPopup={closeSliderPopup}
      />
      {sliderPopupVisible && (
        <SliderPopup
          onSliderChange={handleSliderChange}
          setHexColor={setHexColor}
          hexColor={hexColor}
          onClose={closeSliderPopup}
          sliderPopupVisible={sliderPopupVisible}
        />
      )}
      {popupVisible && <CopyPopup onClose={closePopup} />}
    </div>
  );
}

export { HexSection };
