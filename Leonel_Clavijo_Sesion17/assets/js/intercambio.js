document.getElementById("intercambiar").addEventListener("click", function() {
    let var1 = document.getElementById("variable1").value;
    let var2 = document.getElementById("variable2").value;
  
    // Intercambiar valores sin usar arreglos
    let temp = var1;
    var1 = var2;
    var2 = temp;
  
    // Actualizar los valores en los inputs
    document.getElementById("variable1").value = var1;
    document.getElementById("variable2").value = var2;
  
    // Mostrar el resultado
   // document.getElementById("resultadoIntercambio").textContent = `Variable 1: ${var1}, Variable 2: ${var2}`;
  });