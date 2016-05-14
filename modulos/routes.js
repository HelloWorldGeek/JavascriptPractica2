module.exports = function() {
    
    var routes = {
        configRoutes: function (app, path) {
            app.get('/', function (request, response) {
                //response.send(' ESTAS EN LA PAGINA INCIAL');
                var ruta = path.join(__dirname + '/../views/index.html'); // ruta de mi archivo html que quiero mostrar
                response.sendFile(ruta); // la funcion sendFile envia el archivo con la ruta predicha
            });
            app.get('/contactanos',function (request, response) {
                response.send(' ESTAS EN LA PAGINA CONTACNOS');
            })
            app.get('/productos', function (request, response) {
                response.send(' ESTAS EN LA PAGINA PRODUCTOS ');
            })
            app.get('/github', function (request, response){
                var ruta = path.join(__dirname + '/../views/github.html'); // ruta de mi archivo html que quiero mostrar
                response.sendFile(ruta);
            });
        }
    }
    
    return routes;
}