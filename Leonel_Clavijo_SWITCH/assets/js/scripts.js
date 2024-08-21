function procesarOpcion() {
    opcion = parseInt(document.getElementById('opcion').value);
    salidaTexto = document.getElementById('salidaTexto');

    switch (opcion) {
        case 1:
            salidaTexto.value = "¿Quieres ir a YouTube?";
            break;
        case 2:
            salidaTexto.value = "Vamos a ir de compras.";
            break;
        case 3:
            salidaTexto.value = "Vamos a ir al restaurante.";
            break;
        case 4:
            salidaTexto.value = "Vamos a ir al mall.";
            break;
        case 5:
            alert("Estás saliendo de la página.");
            window.close();
            break;
        default:
            salidaTexto.value = "Opción no válida. Por favor, ingresa un número del 1 al 5.";
            break;
    }
}