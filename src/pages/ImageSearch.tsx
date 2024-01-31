import { useCallback, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Input from "../components/Input";
import Image, { ImageType } from "../components/Image";
import ImageContainer from "../components/ImageContainer";
import ComponentContainer from "../components/ComponentContainer";
import { fetchImages } from "../api/ImageApi";
import { useStore } from "../store/Store";

const ButtonMargin = styled.div`
  margin-top: 1rem;
`;

function ImageSearch(): JSX.Element {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState<ImageType[]>([]);
  const { storedImages } = useStore();
  const addImageToStore = useStore((state) => state.addImage);
  const removeImageToStore = useStore((state) => state.removeImage);

  /**
   * searchImages - Toggle a loading state and fetch images from Flickr.
   */
  const searchImages = useCallback(async (): Promise<void> => {
    if (loading) return;

    setLoading(true);

    await fetchImages(searchValue)
      .then((response: ImageType[]) => {
        setImages(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }, [loading, searchValue]);

  /**
   * handleKeyDown - search for images if the user presses enter in the search field.
   * @param event
   */
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement> | undefined
  ): void => {
    if (event?.key === "Enter") {
      searchImages();
    }
  };

  /**
   * handleOnChange - store the input text in the local state.
   * @param event
   */
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  /**
   * addImage - add and image to the global state (Zustand) and remove them if it is already present.
   * @param id
   * @param url
   * @returns
   */
  const addImage = (id: string, url: string): void => {
    if (
      !storedImages.find((image) => {
        return image.id === id;
      })
    ) {
      return addImageToStore(id, url);
    }
    return removeImageToStore(id);
  };

  /**
   * checkIfSelected - check if an image is present in the global storage, and return a boolean if so. This is used for toggling styling on selected images.
   * @param id
   * @returns
   */
  const checkIfSelected = (id: string): boolean => {
    const isImageSelected = storedImages.find((image) => {
      return image.id === id;
    });

    return isImageSelected ? true : false;
  };

  // TODO: Make Inputs sticky
  return (
    <>
      <ComponentContainer $sticky>
        <Input
          id="SearchField"
          label="What do you want to search for?"
          onKeyDown={handleKeyDown}
          onChange={handleOnChange}
        />
        <ButtonMargin>
          <Button text="Search" onClick={searchImages} />
        </ButtonMargin>
        <ButtonMargin>
          <Button
            text="View my gallery"
            onClick={() => navigate("/Gallery")}
            disabled={storedImages.length < 1}
          />
        </ButtonMargin>
      </ComponentContainer>
      {!loading && (
        <ImageContainer>
          {images.map((image) => {
            return (
              <Image
                selected={checkIfSelected(image.id)}
                url={image.url_n}
                id={image.id}
                key={image.id}
                onClick={() => addImage(image.id, image.url_n)}
              />
            );
          })}
        </ImageContainer>
      )}
    </>
  );
}

export default ImageSearch;
