import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

// const galleryItemsMarkup = galleryItems.map(galleryItem => `<div class="gallery__item">
//   <a class="gallery__link" href="${galleryItem.original}">
//     <img
//       class="gallery__image"
//       src="${galleryItem.preview}"
//       data-source="${galleryItem.original}"
//       alt="${galleryItem.description}"
//     />
//   </a>
// </div>`
// ).join('');
// galleryEl.insertAdjacentHTML("beforeend", galleryItemsMarkup);

const galleryItemsMarkup = galleryItems.map(({ original, preview, description }) => 
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join('');
galleryEl.insertAdjacentHTML("beforeend", galleryItemsMarkup);

galleryEl.addEventListener("click", onImageClick);

let imageInstance;

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
    
  const galleryOriginalImageEl = event.target.dataset.source;
  console.log("🚀 ~ file: 01-gallery.js:31 ~ onImageClick ~ galleryOriginalImageEl", galleryOriginalImageEl);
  imageInstance = basicLightbox.create(`
    <img src="${galleryOriginalImageEl}" width="800" height="600">
`);
  imageInstance.show();
  galleryEl.addEventListener("keydown", onEscKeyPress);
  
}

function onEscKeyPress(event) {
  if (event.code === "Escape") {
    galleryEl.removeEventListener("keydown", onEscKeyPress);
    imageInstance.close();
  }
};
