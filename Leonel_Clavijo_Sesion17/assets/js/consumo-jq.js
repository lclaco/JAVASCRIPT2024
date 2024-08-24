$(document).ready(function() {
    $('#calcular').click(function() {
        const kilometros = parseFloat($('#kilometros').val());
        const litros = parseFloat($('#litros').val());

        if (isNaN(kilometros) || isNaN(litros) || kilometros <= 0 || litros <= 0) {
            $('#resultado').text('Por favor, ingresa valores válidos para kilómetros y litros.');
            return;
        }

        const consumo = litros / kilometros; // Consumo en litros por kilómetro
        $('#resultado').text(`Has consumido ${consumo.toFixed(2)} litros por kilómetro.`);
    });
});