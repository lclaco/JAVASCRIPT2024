document.addEventListener('DOMContentLoaded', function () {
    // Evento espera para iconos de habilidades
    const skillIcons = document.querySelectorAll('.skill-icon a');
    skillIcons.forEach(icon => {
        icon.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Calculadora
    let display = document.getElementById('display');

    window.appendNumber = function (num) {
        display.value += num;
    }

    window.appendOperator = function (operator) {
        display.value += operator;
    }

    window.clearDisplay = function () {
        display.value = '';
    }

    window.calculate = function () {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    }
    
});

// Lotería
let lotteryHistory = [];
const maxNumber = 99;

// Función para generar un número aleatorio único
function getUniqueRandomNumber() {
    let num;
    do {
        num = Math.floor(Math.random() * maxNumber) + 1;
    } while (lotteryHistory.includes(num));
    return num;
}

function drawLottery() {
    if (lotteryHistory.length >= maxNumber) {
        alert("Ya se han sorteado todos los números posibles.");
        return;
    }

    const result = getUniqueRandomNumber();
    lotteryHistory.push(result);
    document.getElementById('lottery-result').textContent = 'Número Sorteado: ' + result;

    // Mostrar el historial
    const historyContainer = document.getElementById('lottery-history');
    historyContainer.innerHTML = ''; // Limpiar el historial antes de mostrar los nuevos números

    lotteryHistory.forEach((num, index) => {
        const span = document.createElement('span');
        span.textContent = num;
        historyContainer.appendChild(span);

        if (index < lotteryHistory.length - 1) {
            // Añadir guión entre números
            const dash = document.createElement('span');
            dash.textContent = ' - ';
            historyContainer.appendChild(dash);
        }
    });
}

// Juego de Adivinanza de Números
function guessNumber() {
    const input = document.getElementById('guess-input').value;
    const numberToGuess = Math.floor(Math.random() * 10) + 1;
    if (input == numberToGuess) {
        document.getElementById('guess-result').textContent = '¡Correcto!';
    } else {
        document.getElementById('guess-result').textContent = 'Incorrecto, el número era: ' + numberToGuess;
    }
}

// Obtener el menú
var navbar = document.getElementById('navbar');

// Cambiar la clase del menú dependiendo del scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) { // Cambiar después de 50px de desplazamiento
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Obtener el botón de subida
var backToTopButton = document.getElementById('back-to-top');

// Mostrar o ocultar el botón dependiendo del scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) { // Mostrar el botón cuando se haya desplazado 300px hacia abajo
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Hacer scroll hacia arriba cuando se haga clic en el botón
backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});    