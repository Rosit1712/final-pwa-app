/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */
import './cust-element/appbar.js';
import './cust-element/sidenav.js';
import allHeader from './cust-element/header.js';

import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/details.css';

import { getData } from './list-rest.js';
import getDetail from './details.js';
import makeSideNav from './sidenav-init';
import Router from './router';
import renderAdd from './cust-element/add';
import allFav from './favorites';

import swRegister from './register-sw';
import requestPermission from './notif';

const showTitle = (text) => {
  const loc = document.querySelector('main h2');
  loc.innerHTML = `${text} Restaurant`;
};

const router = new Router({
  mode: 'hash',
  root: '/',
});

if ('Notification' in window) {
  requestPermission();
}

router
  .add(/favorites/, () => {
    allHeader();
    document.getElementById('content').innerHTML = '';
    showTitle('Favorites');
    document.querySelector('.additional').innerHTML = '';
    allFav();
  })
  .add(/details\/(.*)/, (id) => {
    allHeader();
    showTitle('Details');
    document.querySelector('.additional').innerHTML = '';
    getDetail('detail', id);
  })
  .add('', () => {
    // general controller
    allHeader();
    showTitle('Explore');
    getData('list');
    document.querySelector('.additional').innerHTML = renderAdd();
  });

document.addEventListener('DOMContentLoaded', () => {
  swRegister();
  makeSideNav();
});
