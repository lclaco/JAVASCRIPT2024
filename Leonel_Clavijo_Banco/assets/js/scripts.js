//Definición de Usuarios

const clientes = [
  { nombre: 'Juan Pérez', identificador: 'juan123', clave: '1234', saldo: 5000 },
  { nombre: 'Ana Gómez', identificador: 'ana456', clave: '5678', saldo: 3000 },
  { nombre: 'Carlos Ruiz', identificador: 'carlos789', clave: 'abcd', saldo: 7000 }
];


//Validación de Usuario

function validarUsuario(identificador, clave) {
  return clientes.find(cliente => cliente.identificador === identificador && cliente.clave === clave);
}

//Manejo del Menú y Operaciones

document.getElementById('login').addEventListener('click', function() {
  const identificador = document.getElementById('identificador').value;
  const clave = document.getElementById('clave').value;
  const usuario = validarUsuario(identificador, clave);

  if (usuario) {
      document.getElementById('menu').style.display = 'block';
      document.getElementById('resultado').innerHTML = `<p>Bienvenido ${usuario.nombre}</p>`;
  } else {
      document.getElementById('resultado').innerHTML = '<p>Error: Identificador o clave incorrectos.</p>';
  }
});


//Ver Saldo
document.getElementById('saldo').addEventListener('click', function() {
  const identificador = document.getElementById('identificador').value;
  const usuario = validarUsuario(identificador, document.getElementById('clave').value);
  document.getElementById('resultado').innerHTML = `<p>Su saldo actual es de: $ ${usuario.saldo}</p>`;
});


//Realizar Depósito
document.getElementById('giro').addEventListener('click', function() {
  const identificador = document.getElementById('identificador').value;
  const usuario = validarUsuario(identificador, document.getElementById('clave').value);
  const monto = prompt('Ingrese el monto a girar:');
  if (monto <= usuario.saldo) {
      usuario.saldo -= monto;
      document.getElementById('resultado').innerHTML = `<p>Giro realizado. Su nuevo saldo es de: $ ${usuario.saldo} </p>`;
  } else {
      document.getElementById('resultado').innerHTML = '<p>Error: Fondos insuficientes.</p>';
  }
});

//Realizar Giro
document.getElementById('deposito').addEventListener('click', function() {
  const identificador = document.getElementById('identificador').value;
  const usuario = validarUsuario(identificador, document.getElementById('clave').value);
  const monto = parseInt(prompt('Ingrese el monto a depositar:'));
  usuario.saldo += monto;
  document.getElementById('resultado').innerHTML = `<p>Depósito realizado. Su nuevo saldo es de: $ ${usuario.saldo} CLP</p>`;
});

document.getElementById('salir').addEventListener('click', function() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('resultado').innerHTML = '<p>Sesión finalizada.</p>';
});
