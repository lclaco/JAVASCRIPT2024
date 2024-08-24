document.getElementById("calcular").addEventListener("click", function() {
    console.log("Botón presionado");
    let comensales = parseInt(document.getElementById("comensales").value);
    console.log("Número de comensales:", comensales);
    let mensaje = document.getElementById("mensaje");
    let resultado = document.getElementById("resultado");

    // Limpiar la tabla y el mensaje antes de calcular
    mensaje.textContent = "";
    resultado.innerHTML = "";

    if (isNaN(comensales) || comensales < 1) {
        mensaje.textContent = "Por favor, ingresa un número válido de comensales.";
        return;
    }

    // Cálculo de ingredientes
    let papas = comensales * 200;
    let huevos = (papas / 1000) * 5;
    let cebolla = (papas / 1000) * 300;

    console.log("Resultados:", papas, huevos, cebolla);

    // Crear las filas de la tabla
    resultado.innerHTML = `
        <tr>
            <td>Papas</td>
            <td>${papas} gramos</td>
        </tr>
        <tr>
            <td>Huevos</td>
            <td>${huevos.toFixed(1)} huevos</td>
        </tr>
        <tr>
            <td>Cebolla</td>
            <td>${cebolla} gramos</td>
        </tr>
    `;
});