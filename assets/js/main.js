document.getElementById('submitButton').onclick = registrarEmpleado;
var empleados = [];


function registrarEmpleado() {
    var parameters = {
        firstName: document.getElementById('first_name').value,
        lastName: document.getElementById('last_name').value,
        telefono: document.getElementById('telefono').value,
        email: document.getElementById('email').value
    }
    var empleado = new Empleado(parameters);
    empleados.push(empleado);
    fillTable();
}


function fillTable(){
    var source = document.getElementById('entry-template').innerHTML;
    var template = Handlebars.compile(source);
    var html = template({ empleados: empleados });
    document.getElementById('contenidoEmpleados').innerHTML = html;
}

function saveEmpleados() {
    localStorage.setItem('EMPLEADOS', empleados);
}


/**
 * Clase Empleado
 */
function Empleado(params) {
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.telefono = params.telefono;
    this.email = params.email;
}

Empleado.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName;
}