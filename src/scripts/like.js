/* eslint-disable import/no-extraneous-dependencies */
import swal from 'sweetalert';
import FavoriteIdb from './db';

const optionSwal = {
  buttons: false,
  timer: 900,
};

const changeButton = () => {
  const like = '<i class="fa fa-heart-o" aria-hidden="true" id="ico-like"></i> ';
  const saved = '<i class="fa fa-heart" aria-hidden="true" id="ico-saved"></i> ';
  return {
    lk: like,
    sv: saved,
  };
};

const like = (restaurant) => {
  let button = false;
  const likeBtn = document.getElementById('like-btn');
  likeBtn.addEventListener('click', async () => {
    const b = changeButton();
    if (!button) {
      const ico = document.querySelector('#like-btn i').id;
      if (ico === 'ico-like') {
        await FavoriteIdb.putRest(restaurant);
        likeBtn.innerHTML = b.sv;
        button = true;
        swal('Restaurant Saved', optionSwal);
      } else {
        await FavoriteIdb.deleteRest(restaurant.id);
        button = false;
        likeBtn.innerHTML = b.lk;
        swal('Restaurant Deleted', optionSwal);
      }
    } else {
      await FavoriteIdb.deleteRest(restaurant.id);
      button = false;
      likeBtn.innerHTML = b.lk;
      swal('Restaurant Deleted', optionSwal);
    }
  });
};

export { like, changeButton, optionSwal };
