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
    const modalImg = basicLightbox.create(
        `
        <img
        class="modal__image"
        src="${originalImg}"
        alt="${descriptionImg}"
        />`, {
            onShow: ((modalImg) => {
                event.currentTarget.addEventListener('keydown', onKeydownModal);

                function onKeydownModal(event) {
                    if (event.key === 'Escape') {
                        modalImg.close();
                    }
                    false;
                }
            }),

            onClose: ((modalImg) => {
                event.currentTarget.removeEventListener('keydown', onKeydownModal);

                function onKeydownModal(event) {
                    if (event.key === 'Escape') {
                        modalImg.close();
                    }
                    false;
                }

            }),

        }
    )

    modalImg.show();
    modalImg.close();

}