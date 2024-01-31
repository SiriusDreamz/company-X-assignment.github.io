import styled from "styled-components";

import { VAGUE_YELLOW, DARK_YELLOW } from "../values/colors";

export type ImageType = {
  url_n: string;
  id: string;
};

interface ImageProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  url: string;
  id: string;
  selected: boolean;
}

/**
 * NOTE: Only apply the hover effect on Image below 1025px, to avoid certain negative artefacts when selecting/deselecting pictures on devices smaller than desktop.
 */
const StyledImage = styled.img<{ selected: boolean }>`
  cursor: pointer;
  max-width: 320px;
  max-height: 240px;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  border: 2px solid;
  -webkit-tap-highlight-color: transparent;

  background-color: ${(props) =>
    props.selected ? VAGUE_YELLOW : `transparent`};
  border-color: ${(props) => (props.selected ? DARK_YELLOW : `transparent`)};

  @media (min-width: 1025px) {
    &:hover {
      border-color: ${DARK_YELLOW};
      background-color: transparent;
      filter: brightness(110%);
      box-shadow: 0 3px 5px 0 rgb(213 217 217 / 75%);
    }
  }
`;

function Button(props: ImageProps): JSX.Element {
  return (
    <div onClick={props.onClick}>
      <StyledImage src={props.url} id={props.id} selected={props.selected} />
    </div>
  );
}

export default Button;
