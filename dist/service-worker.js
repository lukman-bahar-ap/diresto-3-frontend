if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,a,n)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const c={uri:location.origin+r.slice(1)};return Promise.all(a.map(r=>{switch(r){case"exports":return i;case"module":return c;default:return e(r)}})).then(e=>{const r=n(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-3c133f34"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/0.bundle.js",revision:"b108cff2fa15c397f6e3f83c3afaab7f"},{url:"/2.bundle.js",revision:"1b0a4b27b7b53a483e60aa31488954b6"},{url:"/3.bundle.js",revision:"6e86cef9707883e21c88112a0dc9654c"},{url:"/4.bundle.js",revision:"ce0bbec00330fd718eff3abe9bec0307"},{url:"/5.bundle.js",revision:"7bf61748051682af4df91e98deafc45f"},{url:"/6.bundle.js",revision:"ab1b8c0d1c947dcebd62254746cf1da9"},{url:"/7.bundle.js",revision:"8c0950456728c1e8bbc326c25843dea9"},{url:"/bundle.js",revision:"47d1edd5c53c53211faeb8a306a612e9"},{url:"/dummy/DATA.json",revision:"f1a64ca8fa7cda10a03c52142dfafeca"},{url:"/favicon.ico",revision:"f4627d70b97b497b810494282826fa96"},{url:"/icon_128x128.png",revision:"7e5fd84e469ebe7c3b45d501c55575e5"},{url:"/icon_144x144.png",revision:"de79e816662d24d9a221a5f263f3aa0f"},{url:"/icon_152x152.png",revision:"86039eb56296387e78d0c41acaecc941"},{url:"/icon_192x192.png",revision:"7c964c7c31044d910a17a4824c213e00"},{url:"/icon_256x256.png",revision:"202c3c8bdc388b8ff71a84b8872e3126"},{url:"/icon_384x384.png",revision:"d3ed71a1d49a54ec0071f7254a008e82"},{url:"/icon_512x512.png",revision:"9a7feee75a85c66ac19e170ae8ece919"},{url:"/icon_72x72.png",revision:"3ffc2856cbaa29a686f92f6531f2e76d"},{url:"/icon_96x96.png",revision:"6020180b41b750e4cb5ada91911fa937"},{url:"/img/circle.svg",revision:"f03dd074654e68618c5ddb0ac5b37fa3"},{url:"/img/footer-background.png",revision:"fceb2ee69f1f75df158035b560b1a74d"},{url:"/img/heroes/hero-image_2-large.jpg",revision:"368da720575d005f11541cb933eb85ff"},{url:"/img/heroes/hero-image_2-small.jpg",revision:"d18ea49716482f9bdeca13ea4db85637"},{url:"/img/heroes/hero-image_2.jpg",revision:"0ab44e99ba8aa5c4418776beecb761da"},{url:"/img/logo-small.png",revision:"bd7bdc8ea65800c2752464bea56a3bc2"},{url:"/img/logo.png",revision:"4ac7b533d21460d283032d26b15da6d4"},{url:"/img/not-found.jpg",revision:"fff3c5f034d31aafbda8be6883eb70e5"},{url:"/index.html",revision:"338c025f9e243dfda1bdcd1514ac71e9"},{url:"/manifest.json",revision:"f1e14844c66a85f7526b8ac1121bedb4"}],{ignoreURLParametersMatching:[/.*/]}),e.cleanupOutdatedCaches(),e.registerRoute(e=>"image"===e.destination,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|search|detail))/,new e.StaleWhileRevalidate({cacheName:"dicoding-restaurant-api",plugins:[new e.ExpirationPlugin({maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*(?:googleapis|gstatic)\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxAgeSeconds:10368e3,maxEntries:100,purgeOnQuotaError:!0})]}),"GET")}));