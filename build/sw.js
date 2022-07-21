const nombreCache = 'apv-v1'; 
const assets = [
    './',
    './index.html',
    './aprender.html',
    './error.html',
    './js/app.js',
    './js/pwa.js',
    './css/app.css',
];



// Instalar el service Worker
self.addEventListener('install', e => {
    console.log('Instalado el Service Worker');

    e.waitUntil(

        caches.open(nombreCache)
            .then( cache => { 
                console.log('cacheando...');
                cache.addAll(assets);
            })
    );


});

// Activar el service worker...
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');

    // Actualizar la PWA //
    e.waitUntil(
        caches.keys()
            .then(keys => {
                console.log(keys); 

                return Promise.all(keys
                        .filter(key => key !== nombreCache)
                        .map(key => caches.delete(key))
                    )
            })
    )
});

// Fetch events para el CSS, HTML, imagenes JS, y hasta llamados a fetch..
self.addEventListener('fetch', e => {
    console.log('Fetch.. ', e);

    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => {
                return respuestaCache || fetch(e.request);
            })
            .catch( () => caches.match('/error.html'))
    );
});


