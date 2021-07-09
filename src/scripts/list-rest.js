/* eslint-disable no-console */
import {
  status, json, endPoint, options,
} from './api';
import createList from './data';

const loadingApi = () => {
  const content = document.getElementById('content');
  content.innerHTML = '<img src="./images/additional/loading-api.gif" alt="loading" class="loading">';
  content.style.display = 'flex';
  content.style.justifyContent = 'center';
};

const getData = (url) => {
  fetch(endPoint(url), options)
    .then(loadingApi())
    .then(status)
    .then(json)
    .then((data) => {
      createList(data.restaurants);
    });
};

export { getData, loadingApi };
