const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/js/app.js",
  "/img/ads1.jpg",
  "/img/ads2.jpg",
  "/img/ads3.jpg",
  "/img/ads4.jpg",
  "/img/logo.png",
  "/img/bg.svg",
  "/img/4.png",
  "/img/P6.jpg",
  "/img/P3.jpg",
  "/img/P7.jpg",
  "/img/P1.jpg",
  "/img/P2.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})