import React from "react";
import chroma from "chroma-js";
import { css } from "@emotion/css";

const ColorSlider = ({ hexColor, setHexColor }) => {
  const [hue, setHue] = React.useState(0);

  React.useEffect(() => {
    const initialHue = chroma(hexColor).get("hsl.h");
    setHue(initialHue);
  }, [hexColor]);

  const handleSliderHueChange = (event) => {
    const newHue = event.target.value;
    const newColor = chroma.hsl(newHue, 1, 0.5).hex();
    setHue(newHue);
    setHexColor(newColor);
  };

  return (
    <div>
      <span
        className={css`
          margin: 0;
          padding: 0;
          font-family: "Poppins", sans-serif;
        `}
      >
        Hue
      </span>
      <input
        type="range"
        min="0"
        max="360"
        step="1"
        name="hue"
        value={hue}
        onChange={handleSliderHueChange}
        className={css`
          appearance: none;
          margin: 0.65rem 0rem;
          width: 100%;
          position: relative;
          border-radius: 1rem;
          cursor: pointer;
          background: linear-gradient(
            to right,
            rgb(204, 75, 75),
            rgb(204, 204, 75),
            rgb(75, 204, 75),
            rgb(75, 204, 204),
            rgb(75, 75, 204),
            rgb(204, 75, 204),
            rgb(204, 75, 75)
          );
        `}
        data-hue="1"
      />
    </div>
  );
};

const BrightnessSlider = ({ hexColor, setHexColor, sliderPopupVisible }) => {
  const [brightness, setBrightness] = React.useState(0.5);

  const handleSliderChange = (event) => {
    const newBrightness = event.target.value;
    const threshold = 0.01;
    const boundedBrightness = Math.min(1 - threshold, Math.max(threshold, newBrightness));

    setBrightness(newBrightness);

    const newColor = chroma(hexColor).set("hsl.l", boundedBrightness).hex();

    setHexColor(newColor);
  };

  return (
    <div>
      <span
        className={css`
          margin: 0;
          padding: 0;
          font-family: "Poppins", sans-serif;
        `}
      >
        Brightness
      </span>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        name="brightness"
        value={brightness}
        onChange={handleSliderChange}
        className={css`
          appearance: none;
          margin: 0.65rem 0rem;
          width: 100%;
          position: relative;
          border-radius: 1rem;
          cursor: pointer;
          background: linear-gradient(to right, black, ${hexColor}, white);
        `}
        data-bright="1"
      />
    </div>
  );
};

export { ColorSlider, BrightnessSlider };
