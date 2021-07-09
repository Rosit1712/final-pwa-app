import { openDB } from 'idb';
import { IDB } from './api';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = IDB;
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});
const FavoriteIdb = {
  async getRest(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAll() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putRest(restaurant) {
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },
  async deleteRest(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteIdb;
