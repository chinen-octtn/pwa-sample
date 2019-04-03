self.addEventListener('install', function(event) {
  // install時の処理
  console.log('ServiceWorker Install');
});

self.addEventListener('activate', function(event) {
  // activate時の処理
  console.log('ServiceWorker Activate');
});

self.addEventListener('fetch', function(event) {
  // fetch時の処理
  console.log('ServiceWorker Fetch');
});