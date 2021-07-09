/* eslint-disable import/no-extraneous-dependencies */
import swal from 'sweetalert';
import FavoriteIdb from './db';
import createList from './data';

const checkingDataDb = (returnDb, listFav) => {
  if (returnDb === 0) {
    const content = document.getElementById('content');
    content.innerHTML = '<h1 class="no-data">No Favorites Restaurant Yet....</h1>';
  } else {
    createList(listFav);
  }
};

async function allFav() {
  try {
    const listFav = await FavoriteIdb.getAll();
    checkingDataDb(listFav.length, listFav);
  } catch (error) {
    swal('Error');
  }
}

export default allFav;
