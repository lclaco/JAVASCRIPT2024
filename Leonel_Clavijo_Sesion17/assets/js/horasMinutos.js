document.getElementById('convertir').addEventListener('click', function() {
    const horas = parseInt(document.getElementById('horas').value) || 0;
    const minutos = parseInt(document.getElementById('minutos').value) || 0;

    const segundos = (horas * 3600) + (minutos * 60);

    document.getElementById('resultado').textContent = `El tiempo total en segundos es: ${segundos}`;
});
