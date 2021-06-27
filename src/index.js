import './sass/main.scss';
import { galleryItems } from "./js/gallery-items";
import makeGalleryMarkup from "./js/make-markup-gallery";

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