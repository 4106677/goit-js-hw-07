import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

let instance = {};

const galleryItem = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${item.preview}" target="_parent" rel="noreferrer noopener">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join("");

console.log(galleryItem);

gallery.insertAdjacentHTML("beforeend", galleryItem);

console.log(gallery);

gallery.addEventListener("click", lightbox);

function lightbox(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) return;

  const currentImage = evt.target;

  //   import * as basicLightbox from "basiclightbox";

  instance = basicLightbox.create(
    `<div class="modal">
      <img src="${currentImage.dataset.source}" />
    </div>`
  );
  instance.show();

  //   instance.close(() => window.addEventListener("click"));
  //   window.addEventListener("click", onEscapePress);

  //   function onEscapePress() {
  //     instance.close;
  //   }
}

// function closeModal(evt) {
//   window.addEventListener("keydown", () => {
//     if (evt.code === "Escape") {
//       instance.close();
//     }
//   });
