// Add imports above this line
import { galleryItems } from './gallery-items';
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const conteiner = document.querySelector('.gallery')
const cards = createColorCards(galleryItems)

conteiner.insertAdjacentHTML("beforeend", cards)

new SimpleLightbox('.gallery a', {captionsData: "alt", animationSpeed: "250"});


function createColorCards(gallery){
  const markup = gallery.map(({preview, original, description}) => {

    return`
        <div class="gallery__item">
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </div>`
  })

  return markup.join('')
}

createColorCards(galleryItems)
