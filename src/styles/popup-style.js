import styled from "@emotion/styled";

const PopupStyle = styled("div")`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 2rem;
  transition: transform 0.5s ease;
  transform: translateY(-2rem);
  min-width: 30%;
  min-height: 30vh;
`;

export { PopupStyle };
