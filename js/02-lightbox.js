import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImg = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img 
        class="gallery__image" 
        src="${preview}" 
        alt="${description}" 
        />
    </a>
 </li>
    `
});

galleryImg.insertAdjacentHTML('beforeend', markup.join(''));
galleryImg.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    const modalImg = new SimpleLightbox('.gallery a', {
        captionSelector: 'img',
        alertErrorMessage: 'Image not found, next image will be loaded',
        captionsData: 'alt',
        captionPosition: 'bottom',
        animationSpeed: 250,
        captionDelay: 0,
    })
}