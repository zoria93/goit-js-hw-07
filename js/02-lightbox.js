import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkup = galleryItems.map(galleryItem => `<a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>`
).join('');
galleryEl.insertAdjacentHTML("beforeend", galleryItemsMarkup);

// galleryEl.addEventListener("click", onImageClick);


// function onImageClick(event) {
//     event.preventDefault();
//     if (event.target.nodeName !== "IMG") {
//         return;
//     }
// };
// все це є автоматично у бібліотеці

new SimpleLightbox('.gallery a', {
  captions: 'true',  
  captionsData: 'alt',
  captionDelay: 250,
    // nav: true,
    // navText: ['←','→'],
});