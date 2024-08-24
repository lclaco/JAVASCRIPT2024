$(document).ready(function() {
    $('#calcular').click(function() {
        const numero = parseInt($('#numero').val());

        if (isNaN(numero) || numero < 10 || numero > 99) {
            $('#resultado').text('Por favor, ingrese un número de dos dígitos.');
            return;
        }

        const unidades = numero % 10;
        const decenas = Math.floor(numero / 10);

        $('#resultado').text(`El número ${numero} tiene ${decenas} decenas y ${unidades} unidades.`);
    });
});
