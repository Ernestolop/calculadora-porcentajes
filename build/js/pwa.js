if ( 'serviceWorker' in navigator ) {
    navigator.serviceWorker.register('./sw.js')
        .then(registrado => console.log('Registrado correctamente... ', registrado))
        .catch(error => console.log('Fallo la instalacion... ', error))
};