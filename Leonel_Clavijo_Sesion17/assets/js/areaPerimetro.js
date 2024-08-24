document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('forma').addEventListener('change', function() {
        const forma = this.value;
        const inputsContainer = document.getElementById('inputs');
        inputsContainer.innerHTML = ''; // Limpiar inputs anteriores

        if (forma === 'cuadrado') {
            inputsContainer.innerHTML = `
                <div class="mb-3">
                    <label for="lado" class="form-label">Lado (cm):</label>
                    <input type="number" id="lado" class="form-control" placeholder="Ingrese el valor del lado" step="0.01">
                </div>
            `;
        } else if (forma === 'triangulo') {
            inputsContainer.innerHTML = `
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
            `;
        } else if (forma === 'circulo') {
            inputsContainer.innerHTML = `
                <div class="mb-3">
                    <label for="radio" class="form-label">Radio (cm):</label>
                    <input type="number" id="radio" class="form-control" placeholder="Ingrese el radio" step="0.01">
                </div>
            `;
        } else if (forma === 'rectangulo') {
            inputsContainer.innerHTML = `
                <div class="mb-3">
                    <label for="baseRect" class="form-label">Base (cm):</label>
                    <input type="number" id="baseRect" class="form-control" placeholder="Ingrese la base" step="0.01">
                </div>
                <div class="mb-3">
                    <label for="alturaRect" class="form-label">Altura (cm):</label>
                    <input type="number" id="alturaRect" class="form-control" placeholder="Ingrese la altura" step="0.01">
                </div>
            `;
        }
    });

    document.getElementById('calcular').addEventListener('click', function() {
        const forma = document.getElementById('forma').value;
        let resultado = '';

        if (forma === 'cuadrado') {
            const lado = parseFloat(document.getElementById('lado').value);
            const area = lado * lado;
            const perimetro = 4 * lado;
            resultado = `Área: ${area.toFixed(2)} cm²<br>Perímetro: ${perimetro.toFixed(2)} cm`;
        } else if (forma === 'triangulo') {
            const base = parseFloat(document.getElementById('base').value);
            const altura = parseFloat(document.getElementById('altura').value);
            const lado1 = parseFloat(document.getElementById('lado1').value);
            const lado2 = parseFloat(document.getElementById('lado2').value);
            const lado3 = parseFloat(document.getElementById('lado3').value);
            const area = (base * altura) / 2;
            const perimetro = lado1 + lado2 + lado3;
            resultado = `Área: ${area.toFixed(2)} cm²<br>Perímetro: ${perimetro.toFixed(2)} cm`;
        } else if (forma === 'circulo') {
            const radio = parseFloat(document.getElementById('radio').value);
            const area = Math.PI * radio * radio;
            const perimetro = 2 * Math.PI * radio;
            resultado = `Área: ${area.toFixed(2)} cm²<br>Perímetro: ${perimetro.toFixed(2)} cm`;
        } else if (forma === 'rectangulo') {
            const base = parseFloat(document.getElementById('baseRect').value);
            const altura = parseFloat(document.getElementById('alturaRect').value);
            const area = base * altura;
            const perimetro = 2 * (base + altura);
            resultado = `Área: ${area.toFixed(2)} cm²<br>Perímetro: ${perimetro.toFixed(2)} cm`;
        } else {
            resultado = 'Por favor, selecciona una forma y llena los campos necesarios.';
        }

        document.getElementById('resultado').innerHTML = resultado;
    });
});
