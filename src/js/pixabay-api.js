import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55672071-de73ab20c9a46d751cd90c1a4';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(({ data }) => data);
}
