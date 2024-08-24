$(document).ready(function() {
    $('#forma').change(function() {
        const forma = $(this).val();
        $('#inputs').empty(); // Limpiar inputs anteriores

        if (forma === 'cuadrado') {
            $('#inputs').append(`
                <div class="mb-3">
                    <label for="lado" class="form-label">Lado (cm):</label>
                    <input type="number" id="lado" class="form-control" placeholder="Ingrese el valor del lado" step="0.01">
                </div>
            `);
        } else if (forma === 'triangulo') {
            $('#inputs').append(`
                <div class="mb-3">
                    <label for="base" class="form-label">Base (cm):</label>
                    <input type="number" id="base" class="form-control" placeholder="Ingrese la base" step="0.01">
                </div>
                <div class="mb-3">
                    <label for="altura" class="form-label">Altura (cm):</label>
                    <input type="number" id="altura" class="form-control" placeholder="Ingrese la altura" step="0.01">
                </div>
                <div class="mb-3">
                    <label for="lado1" class="form-label">Lado 1 (cm):</label>
                    <input type="number" id="lado1" class="form-control" placeholder="Ingrese el primer lado" step="0.01">
                </div>
                <div class="mb-3">
                    <label for="lado2" class="form-label">Lado 2 (cm):</label>
                    <input type="number" id="lado2" class="form-control" placeholder="Ingrese el segundo lado" step="0.01">
                </div>
                <div class="mb-3">
                    <label for="lado3" class="form-label">Lado 3 (cm):</label>
                    <input type="number" id="lado3" class="form-control" placeholder="Ingrese el tercer lado" step="0.01">
                </div>
            `);
        } else if (forma === 'circulo') {
            $('#inputs').append(`
                <div class="mb-3">
                    <label for="radio" class="form-label">Radio (cm):</label>
                    <input type="number" id="radio" class="form-control" placeholder="Ingrese el radio" step="0.01">
                </div>
            `);
        } else if (forma === 'rectangulo') {
            $('#inputs').append(`
                <div class="mb-3">
                    <label for="baseRect" class="form-label">Base (cm):</label>
                    <input type="number" id="baseRect" class="form-control" placeholder="Ingrese la base" step="0.01">
                </div>
                <div class="mb-3">
                    <label for="alturaRect" class="form-label">Altura (cm):</label>
                    <input type="number" id="alturaRect" class="form-control" placeholder="Ingrese la altura" step="0.01">
                </div>
            `);
        }
    });

    $('#calcular').click(function() {
        const forma = $('#forma').val();
        let resultado = '';

        if (forma === 'cuadrado') {
            const lado = parseFloat($('#lado').val());
            const area = lado * lado;
            const perimetro = 4 * lado;
            resultado = `Área: ${area.toFixed(2)} cm²<br>Perímetro: ${perimetro.toFixed(2)} cm`;
        } else if (forma === 'triangulo') {
            const base = parseFloat($('#base').val());
            const altura = parseFloat($('#altura').val());
            const lado1 = parseFloat($('#lado1').val());
            const lado2 = parseFloat($('#lado2').val());
            const lado3 = parseFloat($('#lado3').val());
            const area = (base * altura) / 2;
            const perimetro = lado1 + lado2 + lado3;
            resultado = `Área: ${area.toFixed(2)} cm²<br>Perímetro: ${perimetro.toFixed(2)} cm`;
        } else if (forma === 'circulo') {
            const radio = parseFloat($('#radio').val());
            const area = Math.PI * radio * radio;
            const perimetro = 2 * Math.PI * radio;
            resultado = `Área: ${area.toFixed(2)} cm²<br>Perímetro: ${perimetro.toFixed(2)} cm`;
        } else if (forma === 'rectangulo') {
            const base = parseFloat($('#baseRect').val());
            const altura = parseFloat($('#alturaRect').val());
            const area = base * altura;
            const perimetro = 2 * (base + altura);
            resultado = `Área: ${area.toFixed(2)} cm²<br>Perímetro: ${perimetro.toFixed(2)} cm`;
        } else {
            resultado = 'Por favor, selecciona una forma y llena los campos necesarios.';
        }

        $('#resultado').html(resultado);
    });
});
