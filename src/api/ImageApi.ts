import axios from "axios";

const apiKey = "662a28be30b48e335808f24961126dc6";

/**
 * getFlickrImageURL - this section of the search functionality is abstracted for easier readability/maintainability.
 * Using axios for convenience.
 * @param searchText
 * @returns
 */
const getFlickrImageURL = (searchText: string) => {
  return axios({
    method: "GET",
    url: "https://api.flickr.com/services/rest",
    params: {
      method: "flickr.photos.search",
      api_key: apiKey,
      tags: searchText,
      extras: "url_n",
      page: 1,
      format: "json",
      nojsoncallback: 1,
      per_page: 30,
    },
  });
};

/**
 * fetchImages - this function triggers a "GET" via axios to get images from Flickr.
 */
export const fetchImages = (searchText: string) => {
  return getFlickrImageURL(searchText).then((response) => {
    return response.data.photos.photo;
  });
};
