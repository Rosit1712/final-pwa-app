/* eslint-disable no-undef */
import { changeButton, like } from '../src/scripts/like';
import FavoriteIdb from '../src/scripts/db';

// eslint-disable-next-line no-undef
describe('Liking A Restaurant', () => {
  const likeContainer = () => {
    document.body.innerHTML = '<div id="like-property"></div>';
  };
  const createBtn = () => {
    const prop = document.getElementById('like-property');
    prop.innerHTML = '<button id="like-btn"></button>';
  };
  beforeEach(() => {
    likeContainer();
    createBtn();
    like({ id: 2 });
  });

  it('should show saved/liked button', async () => {
    const rest = await FavoriteIdb.getRest(2);
    const btn = document.getElementById('like-btn');
    const change = changeButton();

    if (rest === undefined) {
      btn.innerHTML = change.lk;
    }

    expect(document.getElementById('ico-like'))
      .toBeTruthy();
  });

  it('should not show saved/liked button', async () => {
    const rest = await FavoriteIdb.getRest(2);
    const btn = document.getElementById('like-btn');
    const change = changeButton();

    if (rest !== undefined) {
      btn.innerHTML = change.sv;
    }

    expect(document.getElementById('ico-saved')).toBeFalsy();
  });
});
