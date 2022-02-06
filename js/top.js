$(document).ready(function() {
        // declare variable
        var scrollTop = $(".scrollTop");

        $(window).scroll(function() {
          // declare variable
          var topPos = $(this).scrollTop();

          // if user scrolls down - show scroll to top button
          if (topPos > 100) {
            $(scrollTop).css("opacity", "1");

          } else {
            $(scrollTop).css("opacity", "0");
          }

        }); // scroll END

        //Click event to scroll to top
          $(scrollTop).click(function() {
            $('html, body').animate({
              scrollTop: 0
            }, 800);
            return false;

          }); // click() scroll top EMD

}); // ready() END



  //Cuando cargue la página completamente
  $(document).ready(function(){
    //Creamos un evento click para el enlace
    $(".ancla").click(function(evento){
      //Anulamos la funcionalidad por defecto del evento
      evento.preventDefault();
      //Creamos el string del enlace ancla
        var codigo = "#" + $(this).data("ancla");
        //var intro = document.getElementById("bgray");
        //intro.className = "cambio";
      //Funcionalidad de scroll lento para el enlace ancla en 3 segundos
       $("html,body").animate({scrollTop: $(codigo).offset().top}, 1000);
    });
  });



//fondo menu al hacer scroll
window.addEventListener("scroll", function(){
var header = document.querySelector("nav");
header.classList.toggle("back", window.scrollY > 0);
})