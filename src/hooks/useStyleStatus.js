import React from "react";

function useStyleStatus() {
  const [isActive, setIsActive] = React.useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const activeStyle = {
    opacity: "1",
    pointerEvents: "all",
  };

  const inactiveStyle = {
    position: "fixed",
    top: "0%",
    left: "0%",
    background: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    transition: "all 0.5s ease-in-out",
    alignItems: "center",
    opacity: "0",
    pointerEvents: "none",
  };

  return { style: isActive ? activeStyle : inactiveStyle, toggle, isActive };
}

export { useStyleStatus };
