'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1f18856552d5e5897eeac75eb16efdf2",
".git/config": "d4705407e1aa072c4f2b43560c00d369",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3e18603105f87dade054903d733e40d1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "008a67d0dfd6e6b97a483e47d1d76c13",
".git/logs/refs/heads/main": "008a67d0dfd6e6b97a483e47d1d76c13",
".git/logs/refs/remotes/origin/main": "868507d76b5bece96d3f6728cf13957a",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/06/280334481827a10ced4837eb6d68d103792def": "35db6e4981bc9d4619d6f8b50ad80beb",
".git/objects/07/5a649d46f21844623d74266ee23f5c30f25a4a": "bca3e7df714953828c448ac85684f28c",
".git/objects/0b/e322382e04bfb87f424b05556558fd2a906f9f": "8c296b95a4e9a2b1c4eca0e919755deb",
".git/objects/0d/753d20ef953ed95899102f8dab1d72002e52ba": "47018f9679f1c6f375d39a4281fffdb6",
".git/objects/20/28c8ff9f054773069e5f7cac69136f343fed38": "0a97f632a89969111d0d4e926627f484",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/24/5d14ba145188bf3a2ea4b1fee8e16b3407be3b": "0b54bfbb8fd9edaec880115a467c7fdb",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/69ba05a00c191f981044c07d1f8c4db2b90921": "5846fb952f329eb2a9b7a427513e91d5",
".git/objects/34/caf9b97316d900b2143435b813facb11771815": "8ff888ba2213f2651af83b540f93e4b3",
".git/objects/41/f220a01f7a1dcea72f2f380f4465b3cf87c069": "a130c02548c3189cafc36938326a85bd",
".git/objects/42/f5bc82efc4227d18956b4163e697600daf592c": "1edab655c233c7c67eaaafe64a5dd355",
".git/objects/44/61d08964e60ae7c4dbc7e60da059a88197e7ab": "3011bbf15bf9409cce24d5f04b6de74e",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/6a/b45d602ca571d218a5e7a26a46ccc73ce21238": "a0669507067d47780d36298ae6af3fce",
".git/objects/6b/4489a8723712112471c1fd0d7c66e021112cd4": "47b8138d1cefa9677185dbb668506343",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/71/03a6ff5a026256792cef829691de27d2cfaa78": "35304a970d9e257feee8d1066c210813",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7d/a9da085584c746418d04d3808cffd2d9051089": "1b87b57b856347789cf96213a8c1f8da",
".git/objects/86/0a6dabbd0b73043cceaa11e61c072f8ce2cf77": "6eadc1797cfbad1c4a55d7faa74c96f9",
".git/objects/86/5284951dbe0a2e56f20ef98b6fb1489a5fb9ef": "e057c4cc67287cbe3ef544123534884a",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/639a352b8d121bc13f02ada42faa7177438529": "b9fa2f5570e4d84df6c63c2f2fee5b3c",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/08bf2e9d457e35321e7c8f1498f700a1e5b767": "a0723bd6ff0a272007cb5974ebb1ea55",
".git/objects/a6/b167538c9437a8bf31c936669afc3fa703267e": "60d21529c020dcb499cbcb31b0752c7b",
".git/objects/a8/cf1875e9a91463acc2c4cea542e11d8dab8247": "70bdd9d91fdd6465188bca9f4ebc9600",
".git/objects/ab/8f4a6bb9e94d9b9a029a81b9731750ea39c1c8": "1cfad3984d0437a673ec0fdf94cc1526",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/e5e62e286e639de8178f908fe0f928850c0c02": "8460c8123f9ea1d73a9d47a4b97ad71e",
".git/objects/bd/17d92586c593944b3d86364c048adaf2dcf278": "448c5bb3a28fce8254643da896bbd9e5",
".git/objects/c3/96f1eeb44bd6a46e47cf16cc732c7eab4fdd88": "a81d0f963695f4aed18d6371c9bf00f4",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cd/f10c0cab8d8a0579e2c2ae845b81d121376be2": "05098cbd42ba34d523e5882eb4460c63",
".git/objects/ce/fad9e42e919a890b93cafdb8aad82238a8bf44": "cf4e1c0489ebb870ced8cf4fd33c53e8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/e1/7fa687447726942429bf717156312beeb81bb6": "2a4342073e6d5f1bcfce9d171ea7e012",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ef/a37ce16dcef9d4cc925e246d29226239b5f15e": "c066b24c15af8906f6ca0296ee21fa4e",
".git/objects/f0/9186db8dff761139a3c4485b80de059bb85af6": "35cf6dcc6b4888af7c932d565d67d61b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fc/57a351ae9498ef60da79cde503e6fe72976095": "fb64ee473f03b09effc568ed2df072a0",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "91d2cdd5ac2fffe0844f05d0f4e92536",
".git/refs/remotes/origin/main": "91d2cdd5ac2fffe0844f05d0f4e92536",
"assets/AssetManifest.bin": "6c4f1dff43641d2feac9a14265842915",
"assets/AssetManifest.bin.json": "851c454d3ad280da34becfc67beb8ed1",
"assets/AssetManifest.json": "8658c6a2db8b6247db38581fd0fa3c19",
"assets/FontManifest.json": "7d7b7262bd29152a6d24c1c777cd99ab",
"assets/fonts/FiraCodeNerdFont-Bold.ttf": "35a9ee15a15360db0742af2a243b942d",
"assets/fonts/MaterialIcons-Regular.otf": "377d06472c514b8204fdd6f99f87f70f",
"assets/NOTICES": "326d00db146530e9d7fb9f86a304fb35",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "50d3beaf78e4699800afb43f0002a18b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "48719a066d4724d2fec2d9b599c336b3",
"icons/Icon-192.png": "d9788527e8a73e69cbc641941493d201",
"icons/Icon-512.png": "21a3a4ef057981cfd31175db91ad4e35",
"icons/Icon-maskable-192.png": "d9788527e8a73e69cbc641941493d201",
"icons/Icon-maskable-512.png": "21a3a4ef057981cfd31175db91ad4e35",
"index.html": "b7ccf009c98361ae597d932413435216",
"/": "b7ccf009c98361ae597d932413435216",
"main.dart.js": "08027dcb2da3e068975b903cd12cfb91",
"manifest.json": "77a031d2bca0a6ed1f554a4374f3e3f4",
"splash/img/dark-1x.png": "438ebcbdb9bd4decd898520fc96cbe4b",
"splash/img/dark-2x.png": "1f6067c9aaf8164f11ae76aa5e2ded1f",
"splash/img/dark-3x.png": "2b1d774d673b97b19aad95339de6a857",
"splash/img/dark-4x.png": "842dac68f9e76b04b402bd2c2ecb6f10",
"splash/img/light-1x.png": "31f6b2600871d7ba7998782eea53e89d",
"splash/img/light-2x.png": "21a3a4ef057981cfd31175db91ad4e35",
"splash/img/light-3x.png": "0131f3959ef37b03299757c9cc4c31d9",
"splash/img/light-4x.png": "e8d78a1011fe92af67ceb80e173ff41a",
"version.json": "2656ddc4aef6333e4d3feeb285f1bb6b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
