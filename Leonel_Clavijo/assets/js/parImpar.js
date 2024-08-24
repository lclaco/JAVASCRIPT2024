document.getElementById("verificar").addEventListener("click", function() {
    let numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese un número válido.";
    } else {
        if (numero % 2 === 0) {
            document.getElementById("resultado").textContent = "El número " + numero + " es par.";
        } else {
            document.getElementById("resultado").textContent = "El número " + numero + " es impar.";
        }
    }
});
