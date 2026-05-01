// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `
        <li>
        <a href='${image.largeImageURL}'>
        <img src='${image.webformatURL}' 
        alt='${image.tags}'
        />
        </a>

        <div class="gallery-info">
            <p><b>Likes</b><br>${image.likes}</p>
            <p><b>Views</b><br>${image.views}</p>
            <p><b>Comments</b><br>${image.comments}</p>
            <p><b>Downloads</b><br>${image.downloads}</p>
          </div>
        </li>
        `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {}

export function hideLoader() {}
