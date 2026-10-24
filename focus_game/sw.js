// 토로의 집중력 정원 서비스워커
// 앱 설치 조건을 채우고, 인터넷이 없을 때 마지막으로 열었던 화면을 보여 준다.
// "네트워크 우선": 인터넷이 되면 항상 최신 파일을 받고(새 버전이 낡은 캐시에 가려지지 않음), 안 될 때만 캐시를 쓴다.
const CACHE = 'toro-garden-v1';

self.addEventListener('install', () => { self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;           // 구글 폰트 등 외부 주소는 건드리지 않는다
  e.respondWith(
    fetch(req).then(res => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() =>
      caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match('./index.html', { ignoreSearch: true }) || caches.match('./'))
    )
  );
});
