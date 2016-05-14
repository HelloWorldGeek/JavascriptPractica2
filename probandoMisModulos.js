var calculadora = require('./modulos/calculadora.js');

/**
 * PROVEMOS NUESTRO MODULO
 */

var myCalculadora = calculadora();
var resultado = myCalculadora.suma(20, 30);
console.log( "LA SUMA ES : " + resultado );