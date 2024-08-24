
  $(document).ready(function() {
    // Función para mostrar la información del destino
    $('.card-footer small').click(function() {
        // Obtener el ID del recuadro que se debe mostrar
        const id = $(this).attr('id');
        const detallesId = `#detalles${id}`;
        
        // Ocultar cualquier recuadro visible actualmente
        $('.detalles').hide();

        // Mostrar el recuadro correspondiente
        $(detallesId).fadeIn();
    });

    // Función para cerrar la información del destino
    $('.btn-close').click(function() {
        // Ocultar el recuadro actualmente visible
        $(this).closest('.detalles').fadeOut();
    });
});
