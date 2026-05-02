import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const value = event.currentTarget.elements['search-text'].value.trim();

  if (!value) {
    iziToast.error({
      message: 'Please enter a search query!',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(value)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(hits);
    })
    .catch(error => {
      iziToast.error({
        message: 'Something went wrong. Please try again later!',
      });

      console.log(error.message);
    })
    .finally(() => {
      event.target.reset();
      hideLoader();
    });
}
