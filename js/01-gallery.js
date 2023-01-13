import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
console.log(gallery);

const createGallery = galleryItems.map(({ preview, original, description }) =>
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

gallery.insertAdjacentHTML("beforeend", createGallery);

gallery.addEventListener('click', handleImageClick);


function handleImageClick(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== "IMG") {
       
    return;
    };
    const originalImage = event.target.dataset.source;
    const imageInstance = basicLightbox.create(`
    <img src="${originalImage}" width="800" height="600">`);

    imageInstance.show();

    gallery.addEventListener("keydown", onEscKeyPress);

   function onEscKeyPress(event) {
    if (event.code === "Escape") {
        gallery.removeEventListener("keydown", onEscKeyPress);
        imageInstance.close();
       };
};
};
    

