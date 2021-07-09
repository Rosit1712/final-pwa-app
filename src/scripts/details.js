import {
  status, json, endPoint, options,
} from './api';
import getImg from './image-api';
import { loadingApi } from './list-rest';
import { like, changeButton } from './like';
// import { like, deleteLike } from './like';
import FavoriteIdb from './db';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// mengambil nilai kategori, menu makan dan minum
const getNestedItem = (nameItem, tagId) => {
  nameItem.forEach((element) => {
    document.querySelector(`#${tagId} .innerText`).innerHTML += `
              <li>${element.name}</li>
          `;
  });
};

const reviewUser = (userReview) => {
  const newest = userReview.length - 4; // 3 komentar paling baru
  userReview.forEach((element) => {
    // if (userReview.indexOf(element) < 3) {
    if (userReview.indexOf(element) > newest) { // 3 komentar paling baru
      document.querySelector('#cust-review .innerText').innerHTML += `
              <ul class="rev-text">
                  <li><i class="fa fa-user-circle"></i> ${element.name}</li>
                  <li>at ${element.date}</li>
                  <li>" ${element.review} "</li>
              </ul>
              `;
    }
  });
};

async function rendering(restaurant) {
  const rest = await FavoriteIdb.getRest(restaurant.id);
  const btn = document.getElementById('like-btn');
  const change = changeButton();

  if (rest === undefined) {
    // console.log('tidak ditemukan');
    // like(restaurant);
    btn.innerHTML = change.lk;
  } else {
    // console.log('ditemukan');
    // console.log(w)
    btn.innerHTML = change.sv;
  }
  // return rest;
}

const showDetails = (details) => {
  const content = document.getElementById('content');
  const img = getImg(details.restaurant.pictureId);
  content.innerHTML += `

    <section class="moreinfo">
        <div class="info-resto" tabindex="0">
            <figure>
                <img class="lazyload" src="${img}" alt="restoran">
                <figcaption>
                    <h3>${details.restaurant.name}</h3>
                    <p><i class="fa fa-star"></i> ${details.restaurant.rating}</p>
                    <p>${details.restaurant.address} ${details.restaurant.city}</p>
                </figcaption>
            </figure>
            <div class="like-property">
                <button id="like-btn">
                    <i class="fa fa-heart-o" aria-hidden="true" id="icon-like"></i> 
                </button>
            </div>
            <div class="innerContent">
                <div class="selling-item">
                    <div id="categories">
                        <h4>Categories</h4>
                        <ul class="innerText">
                        </ul>
                    </div>
                    <div class="menus">
                        <div id="foods">
                            <h4>Menus</h4>
                            <ul class="innerText">
                            </ul>
                        </div>
                        <div id="drinks">
                            <h4>Drinks</h4>
                            <ul class="innerText">
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="cust-review">
                    <h4>Customer Review</h4>
                    <div class="innerText">
                    </div>
                </div>
            </div>
        </div>
    <section>
    `;

  getNestedItem(details.restaurant.categories, 'categories');
  getNestedItem(details.restaurant.menus.foods, 'foods');
  getNestedItem(details.restaurant.menus.drinks, 'drinks');
  reviewUser(details.restaurant.customerReviews);
  rendering(details.restaurant);
  like(details.restaurant);
};

const getDetail = (url, id) => {
  fetch(endPoint(`${url}/${id}`), options)
    .then(loadingApi())
    .then(status)
    .then(json)
    .then((data) => {
      showDetails(data);
    });
};
export default getDetail;
