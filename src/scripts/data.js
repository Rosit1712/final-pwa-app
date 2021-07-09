/* eslint-disable max-len */
import getImg from './image-api';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createList = (restaurant) => {
  const content = document.getElementById('content');
  content.innerHTML += '<div class="list-rest"></div>';
  const listRest = document.querySelector('.list-rest');
  restaurant.forEach((e) => {
    const resultImg = getImg(e.pictureId);
    listRest.innerHTML += `
    <section class="card">
        <figure>
            <img class="lazyload" src="${resultImg}" alt="img-${e.name}">
            <figcaption>${e.city}</figcaption>
        </figure>
        <div class="details">
            <h3>${e.name}</h3>
            <h4>${e.rating}</h4>
            <p>${(e.description).slice(0, 140)} <a href="/#/details/${e.id}" class="more-links">More Details</a></p>
        </div>
    </section>
    `;
  });
};

export default createList;
