
document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const number3 = parseFloat(document.getElementById('number3').value);
    const resultDiv = document.getElementById('result');


    const numbers = [number1, number2, number3];
        const maxNumber = Math.max(...numbers);
        const minNumber = Math.min(...numbers);

    let message = `El número mayor es ${maxNumber} y el número menor es ${minNumber}.`;
    
   /*  let message;

    if (number1 > number2 && number1 > number3) {
        message = `El número ${number1} es mayor que el número ${number2}.`;
    } else if (number1 < number2) {
        message = `El número ${number2} es mayor que el número ${number1}.`;
    } else {
        message = `Ambos números tienen el mismo valor: ${number1}.`;
    } */

    resultDiv.innerHTML = `<div class="alert alert-info">${message}</div>`;
    });