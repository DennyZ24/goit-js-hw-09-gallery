

export default function makeGalleryMarkup(gallery) {
  return gallery.map(({preview, original, description}) => {
    return `
  <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
    `
  }).join('')

};
