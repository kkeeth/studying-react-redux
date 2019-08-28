import axios from "axios";

const giphyAPI = word => {
  const key = "fPHvsGmGLgfrBlLD2i7jEhcIRuk7UtPf";
  const limit = 50;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${word}&limit=${limit}`;

  return axios.get(url);
};

export default giphyAPI;
