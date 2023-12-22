document.addEventListener('DOMContentLoaded', function () {
    let burger = document.getElementById('navbar-burger');
    let close = document.getElementById('navbar-burger--close');
    let menu = document.querySelectorAll(".navbar-menu")
    
    let toggle = function () {
        menu[0].classList.toggle("hidden");
        menu[1].classList.toggle("hidden");
        menu[0].classList.toggle("flex");
        menu[1].classList.toggle("flex");
        burger.classList.toggle("hidden");
        close.classList.toggle("hidden");
    }
    
    burger.addEventListener('click', toggle);
    close.addEventListener('click', toggle);
});