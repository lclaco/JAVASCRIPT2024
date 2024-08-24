$(document).ready(function() {
    $("#intercambiar").click(function() {
        let var1 = $("#variable1").val();
        let var2 = $("#variable2").val();

        // Intercambiar valores sin usar arreglos
        let temp = var1;
        var1 = var2;
        var2 = temp;

        // Actualizar los valores en los inputs
        $("#variable1").val(var1);
        $("#variable2").val(var2);

        // Mostrar el resultado
       // $("#resultadoIntercambio").text(`Variable 1: ${var1}, Variable 2: ${var2}`);
    });
});
