import styled from "styled-components";

import { WHITE, BLACK, YELLOW } from "../values/colors";

interface HeaderProps {
  children: React.ReactNode;
  subText?: string;
}

const StyledHeader = styled.header`
  position: sticky;
  top: 0px;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  color: ${WHITE};
  background-color: ${BLACK};
  box-shadow: 0 4px 5px 0 rgb(213 217 217 / 50%);
`;

const StyledParagraph = styled.p`
  font-style: italic;
  color: ${YELLOW};
`;

function Header(props: HeaderProps): JSX.Element {
  return (
    <StyledHeader>
      <h1>{props.children}</h1>
      <StyledParagraph>{props.subText}</StyledParagraph>
    </StyledHeader>
  );
}

export default Header;
