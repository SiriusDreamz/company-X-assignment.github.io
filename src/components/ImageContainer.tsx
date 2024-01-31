import styled from "styled-components";

interface ImageContainerProps {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

/**
 * ImageContainer - reusable component for wrapping images.
 * @param props
 * @returns
 */
function ImageContainer(props: ImageContainerProps): JSX.Element {
  return <Container>{props.children}</Container>;
}

export default ImageContainer;
