import React from "react";
import { css } from "@emotion/css";
import { CopyPopup, SliderPopup } from "./color-popups";
import { ColorControls } from "./color-buttons";

function HexSection({ title }) {
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
        height: 25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: relative;
        flex: 1 1 0%;
        overflow: hidden;
      `}
    >
      <h2 onClick={openPopup}>Hex</h2>
      <ColorControls sliderPopupVisible={sliderPopupVisible} openSliderPopup={openSliderPopup} closeSliderPopup={closeSliderPopup} />
      {sliderPopupVisible && <SliderPopup onClose={closeSliderPopup} sliderPopupVisible={sliderPopupVisible} />}
      {popupVisible && <CopyPopup onClose={closePopup} />}
    </div>
  );
}

export { HexSection };
