import React from "react";
import { css } from "@emotion/css";
import { CopyPopup, SliderPopup, SavePopup, ColorExistsPopup } from "./color-popups";
import { ColorControls } from "./color-buttons";
import chroma from "chroma-js";
import { CopyToClipboard } from "react-copy-to-clipboard";

const generateHexColor = () => chroma.random().hex();

function HexSection({ title }) {
  const [colorExistsPopupVisible, setColorExistsPopupVisible] = React.useState(false);
  const [popupVisible, setPopupVisible] = React.useState(false);
  const [sliderPopupVisible, setSliderPopupVisible] = React.useState(false);
  const [hexColor, setHexColor] = React.useState(generateHexColor());
  const [savePopupVisible, setSavePopupVisible] = React.useState(false);

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

  const closeSavePopup = () => {
    setSavePopupVisible(false);
  };

  const checkColorContrast = (hexColor) => {
    const luminance = chroma(hexColor).luminance();
    const textColor = luminance > 0.5 ? "black" : "white";
    return {
      color: textColor,
      luminance: luminance,
    };
  };
  const changeColors = () => {
    setHexColor(generateHexColor());
  };

  const handleSliderChange = (event) => {
    const newHue = event.target.value;
    setHexColor(chroma.hsl(newHue, 1, 0.5).hex());
  };

  const saveColor = () => {
    const savedColorsCount = parseInt(localStorage.getItem("savedColorsCount") || "0");
    let isColorExists = false;
    const hexColorText = chroma(hexColor).hex();

    for (let i = 1; i <= savedColorsCount; i++) {
      const key = `savedColor${i}`;
      const colorText = localStorage.getItem(key);
      if (colorText === hexColorText) {
        isColorExists = true;
        break;
      }
    }
    if (!isColorExists) {
      const updatedCount = savedColorsCount + 1;
      const key = `savedColor${updatedCount}`;

      localStorage.setItem(key, hexColorText);
      localStorage.setItem("savedColorsCount", updatedCount.toString());

      setSavePopupVisible(true);
    } else {
      setColorExistsPopupVisible(true);
    }
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
        saveColor={saveColor}
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
      {savePopupVisible && <SavePopup onClose={closeSavePopup} />}
      {colorExistsPopupVisible && <ColorExistsPopup onClose={() => setColorExistsPopupVisible(false)} />}
    </div>
  );
}

export { HexSection };
