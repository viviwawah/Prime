self.addEventListener('install', (e) => {
  // 仅安装，不缓存任何内容
});

self.addEventListener('fetch', (e) => {
  // 仅转发请求
  e.respondWith(fetch(e.request));
});
