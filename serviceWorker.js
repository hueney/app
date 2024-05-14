const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/js/app.js",
  "/img/ads1.webp",
  "/img/ads2.webp",
  "/img/ads3.webp",
  "/img/ads4.webp",
  "/img/logo.png",
  "/img/bg.svg",
  "/img/4.png",
  "/img/P6.webp",
  "/img/P3.webp",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})