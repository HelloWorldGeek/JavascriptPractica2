var libreriaExpress = require('express') // vamos a usar express
var nuevaAplicacion = libreriaExpress() // cuando le ponemo () creamos una nueva aplicacion y se la seteamos a una variable
var path = require('path');// esto me da la ruta de la aplicacion
var routes = require('./modulos/routes.js');
var staticFiles = require('./modulos/staticFiles.js');


/**
 * CONFIGURANDO CARPETAS ESTATICAS 
 */

var myStaticFiles = staticFiles(nuevaAplicacion, libreriaExpress);
myStaticFiles.configFiles([ 'bower_components', 'assets' ]);

/*
* CONFIGURANDO RUTAS
*/
var routesApp = routes();
routesApp.configRoutes(nuevaAplicacion, path);
 
/**
 * CONFIGURANDO PUERTO
 */
nuevaAplicacion.listen(5000);



