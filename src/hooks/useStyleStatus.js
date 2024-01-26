import React from "react";

function useStyleStatus() {
  const [isActive, setIsActive] = React.useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const inactiveStyle = {
    opacity: "0",
    pointerEvents: "all",
  };

  const activeStyle = {
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

  return { style: isActive ? inactiveStyle : activeStyle, toggle, isActive };
}

export { useStyleStatus };
