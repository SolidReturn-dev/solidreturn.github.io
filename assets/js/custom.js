
/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */


(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
            /*====================================
                SCROLLING FUNCTION
                ======================================*/
            $(function () {
                $('.scrollclass a').bind('click', function (event) { //just pass scrollclass in design and start scrolling
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutQuad');
                    event.preventDefault();
                });
            });
            //ADD REMOVE PADDING CLASS ON SCROLL
            $(window).scroll(function () {
                if ($(".navbar").offset().top > 50) {
                    $(".navbar-fixed-top").addClass("navbar-pad-original");
                } else {
                    $(".navbar-fixed-top").removeClass("navbar-pad-original");
                }
            });
            /*====================================
            VAGAS SLIDESHOW SCRIPTS
            ======================================*/
            $(function() {
                $('body').vegas({
                    slides: [
                        { src: 'assets/img/Imagem-home-1-bw.jpg', fade: 1000, delay: 9000},
                        { src: 'assets/img/Imagem-home-2-bw.jpg', fade: 1000, delay: 9000},
                        { src: 'assets/img/Imagem-home-4-bw.jpg', fade: 1000, delay: 9000},
                    ],
                    transition: 'slideLeft',
                    animation: 'random' ,
                    overlay: 'assets/plugins/vegas/overlays/03.png'

                });
            });
            /*
            $(function () {
                $.vegas('slideshow', {
                    backgrounds: [
                      { src: 'assets/img/1.jpg', fade: 1000, delay: 9000 }, //CHANGE THESE IMAGES WITH YOUR ORIGINAL IMAGES
                  //THESE IMAGES ARE FOR DEMO PURPOSE ONLY YOU, CAN NOT USE THEM WITHOUT AUTHORS PERMISSION
                                         
                    ]
                })('overlay', {
                    // SLIDESHOW OVERLAY IMAGE //
                    src: 'assets/plugins/vegas/overlays/05.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
                });

            });
            */

            $(function () { 
                $('.carousel').carousel({
                    interval: 2000 //TIME IN MILLI SECONDS
                });
            });
            /*====================================
               WRITE YOUR SCRIPTS BELOW 
           ======================================*/


        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));

// Função para alternar a visibilidade do texto oculto
function toggleTextoOculto_1() {
    var textoOculto = document.getElementById('textoOculto-1');
    textoOculto.style.display = (textoOculto.style.display === 'none') ? 'block' : 'none';
}

function toggleTextoOculto_2() {
    var textoOculto = document.getElementById('textoOculto-2');
    textoOculto.style.display = (textoOculto.style.display === 'none') ? 'block' : 'none';
}

// Adiciona um evento de clique ao botão para chamar a função
document.getElementById('botaoToggle-1').addEventListener('click', toggleTextoOculto_1);
document.getElementById('botaoToggle-2').addEventListener('click', toggleTextoOculto_2);

