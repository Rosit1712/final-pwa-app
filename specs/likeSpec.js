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
    // like({ id: 1 });
  });

  it('should show saved/liked button', () => {
    const btn = document.getElementById('like-btn');
    const change = changeButton();

    btn.innerHTML = change.lk;

    expect(document.getElementById('ico-like'))
      .toBeTruthy();
  });

  it('should not show saved/liked button', () => {
    const btn = document.getElementById('like-btn');
    const change = changeButton();
    btn.innerHTML = change.lk;

    expect(document.getElementById('ico-saved'))
      .toBeFalsy();
  });

  it('should like restaurant', async () => {
    const btn = document.getElementById('like-btn');
    const change = changeButton();
    btn.innerHTML = change.lk;

    like({ id: 1 });

    btn.dispatchEvent(new Event('click'));
    const rest = await FavoriteIdb.getRest(1);
    expect(rest).toEqual({ id: 1 });
  });

  it('should cancel liked restaurant because already saved', async () => {
    const btn = document.getElementById('like-btn');
    const change = changeButton();
    btn.innerHTML = change.lk;

    like({ id: 1 });

    btn.dispatchEvent(new Event('click'));
    const allrest = await FavoriteIdb.getAll();
    expect(allrest).toEqual([{ id: 1 }]);

    FavoriteIdb.deleteRest(1);
  });
});
