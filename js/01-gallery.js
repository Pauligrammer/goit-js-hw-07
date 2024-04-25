import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const arItems = galleryItems
  .map((galleryItem) =>
      `<li class="gallery__item"><a class="gallery__link" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" 
    alt="${galleryItem.description}"/></a></li>`
  )
  .join("");
gallery.innerHTML = arItems;

gallery.addEventListener("click", (ev) => {
  ev.preventDefault();
  const instance =
    basicLightbox.create(`<img src="${ev.target.dataset.source}" width="800" height="600">
  `);
  instance.show();
  const visible = instance.visible();
  if (visible === true) {
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape") {
        instance.close();
      }
    });
  }
});

console.log(galleryItems);