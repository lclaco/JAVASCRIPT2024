document.getElementById('calcular').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero) || numero < 10 || numero > 99) {
        document.getElementById('resultado').textContent = 'Por favor, ingrese un número de dos dígitos.';
        return;
    }

    const unidades = numero % 10;
    const decenas = Math.floor(numero / 10);

    document.getElementById('resultado').textContent = `El número ${numero} tiene ${decenas} decenas y ${unidades} unidades.`;
});
