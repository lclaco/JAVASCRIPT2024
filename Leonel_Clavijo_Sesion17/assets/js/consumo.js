document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcular').addEventListener('click', function() {
        const kilometros = parseFloat(document.getElementById('kilometros').value);
        const litros = parseFloat(document.getElementById('litros').value);

        if (isNaN(kilometros) || isNaN(litros) || kilometros <= 0 || litros <= 0) {
            document.getElementById('resultado').textContent = 'Por favor, ingresa valores válidos para kilómetros y litros.';
            return;
        }

        const consumo = litros / kilometros; // Consumo en litros por kilómetro
        document.getElementById('resultado').textContent = `Has consumido ${consumo.toFixed(2)} litros por kilómetro.`;
    });
});



