
window.onload = function() {
  mostrarMenuInicial();
};


function mostrarMenuInicial() {
  const contenido = `
      <div class="text-center">
          <p><strong>¡Hola! Soy Eva, tu asistente virtual del servicio al cliente de Mentel.</strong></p>
          <p>Estoy aquí para ayudarte en lo que necesites.</p>
          <p><strong>Escribe el número de la opción que buscas:</strong></p>
          <ul class="list-unstyled">
              <li>1.- Boletas y Pagos</li>
              <li>2.- Señal y llamadas</li>
              <li>3.- Oferta comercial</li>
              <li>4.- Otras consultas</li>
          </ul>
          <input type="text" id="opcionSeleccionada" class="form-control text-center mx-auto" style="max-width: 300px;" placeholder="Escribe aquí tu opción">
          <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
              <button class="btn btn-primary" onclick="procesarOpcion()">Aceptar</button>
              <button class="btn btn-secondary" onclick="cancelar()">Cancelar</button>
          </div>
      </div>
  `;
  document.getElementById('contenido').innerHTML = contenido;
}

function procesarOpcion() {
  const opcion = document.getElementById('opcionSeleccionada').value;
  
  switch (opcion) {
      case "1":
          mostrarBoletasYPagos();
          break;
      case "2":
          mostrarSenalYLlamadas();
          break;
      case "3":
          mostrarOfertaComercial();
          break;
      case "4":
          mostrarOtrasConsultas();
          break;
      default:
          mostrarOpcionInvalida();
          break;
  }
}

function cancelar() {
  mostrarMenuInicial();
}



function mostrarBoletasYPagos() {
  const contenido = `
      <p>Has seleccionado 'Boletas y Pagos'. Selecciona una opción:</p>
      <ul>
          <li>1.- Ver Boleta</li>
          <li>2.- Pagar cuenta</li>
      </ul>
      <input type="text" id="opcionBoletasPagos" class="form-control" placeholder="Escribe aquí tu opción">
      <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
          <button class="btn btn-primary" onclick="procesarBoletasYPagos()">Aceptar</button>
          <button class="btn btn-secondary" onclick="cancelar()">Cancelar</button>
      </div>
  `;
  document.getElementById('contenido').innerHTML = contenido;
}

function procesarBoletasYPagos() {
  const opcion = document.getElementById('opcionBoletasPagos').value;

  if (opcion === "1") {
      mostrarDescargarBoleta();
  } else if (opcion === "2") {
      mostrarTransferenciaPago();
  } else {
      mostrarOpcionInvalida();
  }
}

function mostrarDescargarBoleta() {
  const contenido = `
      <p>Haga clic aquí para descargar su boleta:</p>
      <a href="#" class="btn btn-success">Descargar Boleta</a>
      <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
          <button class="btn btn-primary" onclick="mostrarMenuInicial()">Aceptar</button>
      </div>
  `;
  document.getElementById('contenido').innerHTML = contenido;
}

function mostrarTransferenciaPago() {
  const contenido = `
      <p>Usted está siendo transferido. Espere por favor...</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
          <button class="btn btn-primary" onclick="mostrarMenuInicial()">Aceptar</button>
      </div>
  `;
  document.getElementById('contenido').innerHTML = contenido;
}

function mostrarSenalYLlamadas() {
  const contenido = `
      <p>Has seleccionado 'Señal y llamadas'. Selecciona una opción:</p>
      <ul>
          <li>1.- Problema con la señal</li>
          <li>2.- Problema con las llamadas</li>
      </ul>
      <input type="text" id="opcionSenalLlamadas" class="form-control" placeholder="Escribe aquí tu opción">
      <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
          <button class="btn btn-primary" onclick="procesarSenalYLlamadas()">Aceptar</button>
          <button class="btn btn-secondary" onclick="cancelar()">Cancelar</button>
      </div>
  `;
  document.getElementById('contenido').innerHTML = contenido;
}

function procesarSenalYLlamadas() {
  const opcion = document.getElementById('opcionSenalLlamadas').value;

  if (opcion === "1" || opcion === "2") {
      mostrarSolicitudSenalLlamadas();
  } else {
      mostrarOpcionInvalida();
  }
}

function mostrarSolicitudSenalLlamadas() {
  const contenido = `
      <p>A continuación, escribe tu solicitud:</p>
      <input type="text" id="solicitudSenalLlamadas" class="form-control" placeholder="Escribe aquí tu solicitud">
      <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
          <button class="btn btn-primary" onclick="confirmarSolicitud()">Aceptar</button>
          <button class="btn btn-secondary" onclick="cancelar()">Cancelar</button>
      </div>
  `;
  document.getElementById('contenido').innerHTML = contenido;
}

function confirmarSolicitud() {
  const solicitud = document.getElementById('solicitudSenalLlamadas').value;
  const contenido = `
      <p>Estimado usuario, su solicitud: "${solicitud}" ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
          <button class="btn btn-primary" onclick="mostrarMenuInicial()">Aceptar</button>
      </div>
  `;
  document.getElementById('contenido').innerHTML = contenido;
}

function mostrarOfertaComercial() {
  const contenido = `
      <p>¡Mentel tiene una oferta comercial!</p>
      <p>Escriba "SI" o "NO".</p>
      <input type="text" id="opcionOfertaComercial" class="form-control" placeholder="Escribe aquí tu opción">
      <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
          <button class="btn btn-primary" onclick="procesarOfertaComercial()">Aceptar</button>
          <button class="btn btn-secondary" onclick="cancelar()">Cancelar</button>
      </div>
  `;
  document.getElementById('contenido').innerHTML = contenido;
}

function procesarOfertaComercial() {
  const opcion = document.getElementById('opcionOfertaComercial').value.toUpperCase();

  if (opcion === "SI") {
      mostrarContactoEjecutivo();
  } else if (opcion === "NO") {
      mostrarGraciasPorPreferirnos();
  } else {
      mostrarOpcionInvalida();
  }
}

function mostrarContactoEjecutivo() {
  const contenido = `
      <p>Un ejecutivo se contactará con usted.</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
          <button class="btn btn-primary" onclick="mostrarMenuInicial()">Aceptar</button>
      </div>
  `;
  document.getElementById('contenido').innerHTML = contenido;
}

function mostrarGraciasPorPreferirnos() {
  const contenido = `
      <p>Gracias por preferirnos.</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
          <button class="btn btn-primary" onclick="mostrarMenuInicial()">Aceptar</button>
      </div>
  `;
  document.getElementById('contenido').innerHTML = contenido;
}

function mostrarOtrasConsultas() {
  const contenido = `
      <p>Por favor, escribe tu consulta:</p>
      <input type="text" id="consulta" class="form-control" placeholder="Escribe aquí tu consulta">
      <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
          <button class="btn btn-primary" onclick="confirmarConsulta()">Aceptar</button>
          <button class="btn btn-secondary" onclick="cancelar()">Cancelar</button>
      </div>
  `;
  document.getElementById('contenido').innerHTML = contenido;
}

function confirmarConsulta() {
  const consulta = document.getElementById('consulta').value;
  const contenido = `
      <p>Estimado usuario, su consulta: "${consulta}" ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
          <button class="btn btn-primary" onclick="mostrarMenuInicial()">Aceptar</button>
      </div>
  `;
  document.getElementById('contenido').innerHTML = contenido;
}

function mostrarOpcionInvalida() {
  const contenido = `
      <p>La opción no es válida, gracias.</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
          <button class="btn btn-primary" onclick="mostrarMenuInicial()">Aceptar</button>
      </div>
  `;
  document.getElementById('contenido').innerHTML = contenido;
}

function cancelar() {
  mostrarMenuInicial();
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

/**
   * Animation on scroll function and init
   */
function aosInit() {
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
}
window.addEventListener('load', aosInit);



    /**
   * Auto generate the carousel indicators
   */
  document.querySelectorAll('.carousel-indicators').forEach((carouselIndicator) => {
    carouselIndicator.closest('.carousel').querySelectorAll('.carousel-item').forEach((carouselItem, index) => {
      if (index === 0) {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}" class="active"></li>`;
      } else {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}"></li>`;
      }
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  
  const glightbox = GLightbox({
  selector: '.glightbox'
  });

