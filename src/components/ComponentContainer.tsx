import styled from "styled-components";

import { WHITE } from "../values/colors";

interface ComponentContainerProps {
  children: React.ReactNode;
  $sticky?: boolean | undefined;
}

const Container = styled.div<{ $sticky: boolean | undefined }>`
  padding: 2em;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${WHITE};

  position: ${(props) => props.$sticky && `sticky`};
  top: ${(props) => props.$sticky && `118px`};
  z-index: ${(props) => props.$sticky && `1`};

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
  }
`;

/**
 * ComponentContainer - reusable component acting as a container/wrapper for inputs, buttons, etc.
 * @param props
 * @returns
 */
function ComponentContainer(props: ComponentContainerProps): JSX.Element {
  return <Container $sticky={props.$sticky}>{props.children}</Container>;
}

export default ComponentContainer;
