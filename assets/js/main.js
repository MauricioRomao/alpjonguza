window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var menu = document.querySelector('.header_menu');
    var menu_afastado = document.querySelector(".menu_afastado a");

    if (window.scrollY > header.clientHeight) {
        menu.classList.add('menu_scroll');
        menu_afastado.classList.add("menu_scroll");
    } else {    
        menu.classList.remove('menu_scroll');
    }
});



// - Menu escndido
var menu_escondido = document.querySelector(".menu_escondido")
let bx_menu = document.querySelector(".bx-menu")
bx_menu.addEventListener("click", function(){
    menu_escondido.classList.toggle("menu_ativo")
    bx_menu.classList.toggle("bx_color")

    
})

document.addEventListener("DOMContentLoaded", function() {
    function fecharMenu() {
    
        const esconder = document.querySelectorAll(".esconder");
    
        if (esconder.length > 0) {
            esconder.forEach(function(element) {
                element.addEventListener("click", function() {
                 menu_escondido.classList.remove("menu_ativo")
                });
            });
        } else {
            console.log(" Sempre a errar, Mauro !!");
        }
    }

   
    fecharMenu();
});
window.addEventListener('scroll', function() {
    var controller = document.getElementById('whatsapp-controller');
    if (window.scrollY > 50) {
        controller.style.display = 'block'; // Mostra o ícone após 200px
    } else {
        controller.style.display = 'none'; // Esconde o ícone antes dos 200px
    }
});


function scrollToTop() {
    document.body.scrollTop = 0; // <!-- Para navegadores Safari -->
    document.documentElement.scrollTop = 0; // <!--- Para outros navegadores -->
}

function scrollFunction() {
    var scrollToTopBtn = document.querySelector('.scroll_controller');

    if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
}
