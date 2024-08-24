const clientes = [
    { nombre: 'Juan Pérez', identificador: 'juan123', clave: '1234', saldo: 5000 },
    { nombre: 'Ana Gómez', identificador: 'ana456', clave: '5678', saldo: 3000 },
    { nombre: 'Carlos Ruiz', identificador: 'carlos789', clave: 'abcd', saldo: 7000 }
];

function validarUsuario(identificador, clave) {
    return clientes.find(cliente => cliente.identificador === identificador && cliente.clave === clave);
}

$('#login').click(function() {
    const identificador = $('#identificador').val();
    const clave = $('#clave').val();
    const usuario = validarUsuario(identificador, clave);

    if (usuario) {
        $('#menu').show();
        $('#resultado').html(`<p>Bienvenido ${usuario.nombre}</p>`);
    } else {
        $('#resultado').html('<p>Error: Identificador o clave incorrectos.</p>');
    }
});

$('#saldo').click(function() {
    const identificador = $('#identificador').val();
    const usuario = validarUsuario(identificador, $('#clave').val());
    $('#resultado').html(`<p>Su saldo actual es de: ${usuario.saldo} CLP</p>`);
});

$('#giro').click(function() {
    const identificador = $('#identificador').val();
    const usuario = validarUsuario(identificador, $('#clave').val());
    const monto = prompt('Ingrese el monto a girar:');
    if (monto <= usuario.saldo) {
        usuario.saldo -= monto;
        $('#resultado').html(`<p>Giro realizado. Su nuevo saldo es de: ${usuario.saldo} CLP</p>`);
    } else {
        $('#resultado').html('<p>Error: Fondos insuficientes.</p>');
    }
});

$('#deposito').click(function() {
    const identificador = $('#identificador').val();
    const usuario = validarUsuario(identificador, $('#clave').val());
    const monto = prompt('Ingrese el monto a depositar:');
    usuario.saldo += monto;
    $('#resultado').html(`<p>Depósito realizado. Su nuevo saldo es de: ${usuario.saldo} CLP</p>`);
});

$('#salir').click(function() {
    $('#menu').hide();
    $('#resultado').html('<p>Sesión finalizada.</p>');
});
