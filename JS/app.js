const burger = document.querySelector('.burger');
const menu = document.querySelector('.navul');
const name = document.querySelector('.my_name');
const header = document.querySelector('.header_container');

(function () {
    burger.addEventListener('click', () =>{
        burger.classList.toggle('burger_open');
        menu.classList.toggle('navul_open');
        name.classList.toggle('my_name__open');
        header.classList.toggle('header_container__open');
    })
}())



 
