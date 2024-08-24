$(document).ready(function() {
    $('#convertir').click(function() {
        const horas = parseInt($('#horas').val()) || 0;
        const minutos = parseInt($('#minutos').val()) || 0;

        const segundos = (horas * 3600) + (minutos * 60);

        $('#resultado').text(`El tiempo total en segundos es: ${segundos}`);
    });
});
