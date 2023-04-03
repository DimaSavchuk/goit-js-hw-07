import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');


const markup = galleryItems.map(({ preview, original, description }) => {
    return `
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
    `
});

galleryEl.insertAdjacentHTML('beforeend', markup.join(''));
galleryEl.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    const originalImg = event.target.dataset.source;
    const descriptionImg = event.target.alt;
    const modal = basicLightbox.create(
        `
        <img
        class="modal__image"
        src="${originalImg}"
        alt="${descriptionImg}"
        />`, {
            onShow: () => window.addEventListener('keydown', onKeydownModal),
            onClose: () => window.removeEventListener('keydown', onKeydownModal),
        }
    );

    modal.show();

    function onKeydownModal(event) {
        if (event.keyCode === 27) {
            modal.close();
        }
    }

}