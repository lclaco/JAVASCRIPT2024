 $(document).ready(function() {
    $("#calcular").click(function() {
        let comensales = parseInt($("#comensales").val());
        let mensaje = $("#mensaje");
        let resultado = $("#resultado");

        // Limpiar la tabla y el mensaje antes de calcular
        mensaje.text("");
        resultado.empty();

        if (isNaN(comensales) || comensales < 1) {
            mensaje.text("Por favor, ingresa un número válido de comensales.");
            return;
        }

        // Cálculo de ingredientes
        let papas = comensales * 200;
        let huevos = (papas / 1000) * 5;
        let cebolla = (papas / 1000) * 300;

        // Crear las filas de la tabla
        resultado.append(`
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
        `);
    });
});





