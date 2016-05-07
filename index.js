var libreriaExpress = require('express') // vamos a usar express
var nuevaAplicacion = libreriaExpress() // cuando le ponemo () creamos una nueva aplicacion y se la seteamos a una variable
var path = require('path');// esto me da la ruta de la aplicacion

/**
 * CONFIGURANDO CARPETAS ESTATICAS 
 */
nuevaAplicacion.use(libreriaExpress.static('bower_components'));
nuevaAplicacion.use(libreriaExpress.static('assets'));

/*
* CONFIGURANDO RUTAS
*/
nuevaAplicacion.get('/', function (request, response) {
    //response.send(' ESTAS EN LA PAGINA INCIAL');
    var ruta = path.join(__dirname + '/views/index.html'); // ruta de mi archivo html que quiero mostrar
    response.sendFile(ruta); // la funcion sendFile envia el archivo con la ruta predicha
});
nuevaAplicacion.get('/contactanos',function (request, response) {
    response.send(' ESTAS EN LA PAGINA CONTACNOS');
})
nuevaAplicacion.get('/productos', function (request, response) {
    response.send(' ESTAS EN LA PAGINA PRODUCTOS ');
})
 
/**
 * CONFIGURANDO PUERTO
 */
nuevaAplicacion.listen(5000);