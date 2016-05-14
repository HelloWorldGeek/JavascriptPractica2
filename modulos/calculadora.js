module.exports = function() {

    var calculadora = {
        suma: function (a, b) {
            return a + b;
        },
        resta: function(a, b){
            return a - b;
        }
    };
    
    return calculadora;
}