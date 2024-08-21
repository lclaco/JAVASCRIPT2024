function redirectToSuccess(event) {
    event.preventDefault(); // Evita el envío real del formulario
    window.open('success.html', '_blank'); // Abre la página success.html en una nueva pestaña
}