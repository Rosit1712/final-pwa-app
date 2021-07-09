/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
// import '../public/images/additional/loading-api.svg';
const status = (response) => {
  if (response.status === 200) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.removeAttribute('style');
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
};

const json = (response) => response.json();
const endPoint = (url) => `https://restaurant-api.dicoding.dev/${url}`;
const options = {
  method: 'GET',
};

const optionsAddRev = {
  method: 'POST',
  header: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Auth-Token': '12345',
  },
};
const IDB = {
  DATABASE_NAME: 'fav-rest',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
};

const chaceing = {
  CACHE_NAME: new Date().toISOString(),
};

export {
  status, json, endPoint, options, IDB, chaceing, optionsAddRev,
};
