import styled from "styled-components";

import { DARKEST_YELLOW, DARK_YELLOW, YELLOW } from "../values/colors";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  text: string;
  disabled?: boolean;
}

const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  padding: 0 12px;
  height: 50px;
  width: 300px;
  background: ${YELLOW};
  border: 1px solid ${DARK_YELLOW};
  box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  -webkit-tap-highlight-color: transparent;

  &:disabled {
    cursor: default;
  }

  @media (min-width: 1025px) {
    &:hover {
      background: #f7ca00;
      border-color: ${DARK_YELLOW};
      box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
    }
  }

  &:active {
    background: ${DARKEST_YELLOW};
    border-color: ${DARK_YELLOW};
    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  }
`;

function Button(props: ButtonProps): JSX.Element {
  return (
    <StyledButton
      onClick={props.onClick}
      disabled={props.disabled}
      type="button"
    >
      {props.text}
    </StyledButton>
  );
}

export default Button;
