/* 

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

text1.addEventListener("mouseenter", function() {
    text2.style.display = "block";
});

text1.addEventListener("mouseleave", function() {
    text2.style.display = "none";
});


const img = document.getElementById("img");
const originalWidth = img.width;

img.addEventListener("click", function() {
    img.style.width = "40%";
});

img.addEventListener("mouseleave", function() {
    img.style.width = "20%";
});


const caja3 = document.getElementById("caja3");

caja3.addEventListener("dblclick", function() {
    const paragraph = caja3.querySelector("p");
    paragraph.style.fontSize = paragraph.style.fontSize === "2em" ? "1em" : "2em";
});
 */

//**JQ

$(document).ready(function() {
    // Mostrar/Ocultar text2 cuando el mouse pasa sobre text1
    $("#text1").mouseenter(function() {
        $("#text2").show();
    }).mouseleave(function() {
        $("#text2").hide();
    });

    // Agrandar imagen al hacer clic y volver al tamaño original al salir
    $("#img").click(function() {
        $(this).css("width", "40%");
    }).mouseleave(function() {
        $(this).css("width", "20%");
    });

    // Agrandar el texto al hacer doble clic en caja3
    $("#caja3").dblclick(function() {
        let $paragraph = $(this).find("p");
        let currentSize = parseInt($paragraph.css("font-size"));
        let newSize = currentSize === 32 ? 16 : 32; // Cambiar entre 16px y 32px
        $paragraph.css("font-size", newSize + "px");
    });
});