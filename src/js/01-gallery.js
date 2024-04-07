// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const listItems = galleryItems
  .map(
    galleryItem =>
      `<li><a class="gallery__item" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" 
    alt="${galleryItem.description}"/></a></li>`
  )
  .join('');
gallery.innerHTML = listItems;

gallery.addEventListener('click', event => {
  event.preventDefault();
  const lightbox = new SimpleLightbox(`.gallery a`, {
    captions: true,
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
  lightbox.open();
});
