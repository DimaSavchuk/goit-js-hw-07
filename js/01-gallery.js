import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');


const markup = galleryItems.map(({ preview, original, description }) => { `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
` });

galleryEl.insertAdjacentHTML('beforeend', markup.join(''));



console.log(galleryItems);