import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Image from "../components/Image";
import ImageContainer from "../components/ImageContainer";
import ComponentContainer from "../components/ComponentContainer";

import { useStore, StoreImageType } from "../store/Store";

function Gallery(): JSX.Element {
  const navigate = useNavigate();
  const { storedImages } = useStore();

  return (
    <>
      <ComponentContainer $sticky>
        <Button
          text="Make a new search"
          onClick={() => navigate("/ImageSearch")}
          disabled={storedImages.length < 1}
        />
      </ComponentContainer>
      <ImageContainer>
        {storedImages.map((image: StoreImageType) => {
          return (
            <Image
              url={image.url}
              id={image.id}
              key={image.id}
              selected={false}
            />
          );
        })}
      </ImageContainer>
    </>
  );
}

export default Gallery;
