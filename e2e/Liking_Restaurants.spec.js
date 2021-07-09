/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('No Favorites Restaurant', ({ I }) => {
  I.seeElement('#content');
  I.see('No Favorites Restaurant Yet....', '.no-data');
});

Scenario('Like One Restaurants', async ({ I }) => {
  I.see('No Favorites Restaurant Yet....', '.no-data');

  I.amOnPage('/');

  I.seeElement('.list-rest a');

  const rest1 = locate('.list-rest a').first();
  const restName = await I.grabTextFrom('.list-rest .details h3');
  I.click(rest1);

  I.seeElement('#like-btn');
  I.click('#like-btn');

  I.amOnPage('/#/favorites');
  I.seeElement('.list-rest');
  const likedRest = await I.grabTextFrom('.list-rest .details h3');

  assert.strictEqual(restName, likedRest);
});

Scenario('Cancel Like Restaurants', async ({ I }) => {
  I.see('No Favorites Restaurant Yet....', '.no-data');

  I.amOnPage('/');

  I.seeElement('.list-rest a');

  const rest1 = locate('.list-rest a').first();
  const restName = await I.grabTextFrom('.list-rest .details h3');
  I.click(rest1);

  I.seeElement('#like-btn');
  I.click('#like-btn');

  I.amOnPage('/#/favorites');
  I.seeElement('.list-rest');
  const likedRest = await I.grabTextFrom('.list-rest .details h3');

  assert.strictEqual(restName, likedRest);

  I.amOnPage('/#/favorites');
  I.seeElement('.list-rest');

  I.click(locate('.list-rest a').first());
  I.seeElement('#like-btn');
  I.click('#like-btn');
});
