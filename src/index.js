import './sass/main.scss';
const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryListEl = document.querySelector('.js-gallery');
const LightBoxContainerEl = document.querySelector('.js-lightbox')
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
const backdropEl = document.querySelector('.js-overlay');
const lightboxImgEl = LightBoxContainerEl.querySelector('.lightbox__image');


galleryListEl.addEventListener('click', onImgItemClick);
closeModalBtn.addEventListener('click', onCloseBtnClick);
backdropEl.addEventListener('click', evt => {
  if (evt.target === evt.currentTarget) {
    onCloseBtnClick();
  };
})


const galleryStringMarkup = makeGalleryMarkup(galleryItems);
galleryListEl.innerHTML = galleryStringMarkup;



function onImgItemClick(evt) {
  evt.preventDefault();

  const isImgItem = evt.target.classList.contains('gallery__image')
  if (!isImgItem) {
    return
  };

  const dataSoureAttribute = evt.target.dataset.source;
  const altValueImg = evt.target.alt;
  

  openModal();

  setAttributeOnImgInModal(dataSoureAttribute, altValueImg);
};

function onCloseBtnClick(evt) {
  window.removeEventListener('keydown', onEscPress);
  LightBoxContainerEl.classList.remove('is-open');
  removeAttributeOnImgModal();
};

function makeGalleryMarkup(gallery) {
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

function openModal() {
  LightBoxContainerEl.classList.add('is-open');
  window.addEventListener('keydown', onEscPress, {once: true})
};

function setAttributeOnImgInModal(data, alt) {
  lightboxImgEl.src = data;
  lightboxImgEl.alt = alt;
}

function removeAttributeOnImgModal() {
  lightboxImgEl.src = '';
  lightboxImgEl.alt = '';
}

function onEscPress(evt) {
  const isEcsCode = evt.code === 'Escape';

  if (isEcsCode) {
    onCloseBtnClick();
  };
}