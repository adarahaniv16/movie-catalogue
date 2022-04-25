import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption; //untuk mendapatkan seluruh aset yang membentuk keseluruhan aplikasi (app shell). 

self.addEventListener('install', (event) => {
    //Caching App Shell Resource
    event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
  });
   
  self.addEventListener('activate', (event) => {
    // Delete old caches
    event.waitUntil(CacheHelper.deleteOldCache());
  });
   
  self.addEventListener('fetch', (event) => {
    //Add/get fetch request to/from caches
    event.respondWith(fetch(event.request));
  });