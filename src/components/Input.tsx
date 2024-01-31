import styled from "styled-components";

import { DARK_YELLOW } from "../values/colors";

interface InputProps {
  label: string;
  id: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const StyledDiv = styled.div`
  display: inline-block;
  width: 300px;

  @media (max-width: 1075px) {
    margin-left: -28px;
  }
`;

const StyledInput = styled.input`
  outline: 0;
  border-radius: 8px;
  height: 48px;
  padding: 0 12px;
  width: 100%;
  box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  border: 1px solid ${DARK_YELLOW};

  &:hover {
    border-color: ${DARK_YELLOW};
    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  }
`;

const StyledLabel = styled.label`
  display: flex;
`;

function Input(props: InputProps): JSX.Element {
  return (
    <StyledDiv>
      <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
      <StyledInput
        id={props.id}
        type="text"
        onKeyDown={props.onKeyDown}
        onChange={props.onChange}
      />
    </StyledDiv>
  );
}

export default Input;
