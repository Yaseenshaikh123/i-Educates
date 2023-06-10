burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
search = document.querySelector('.search')
ul = document.querySelector('.navul')

burger.addEventListener('click', ()=>{
    search.classList.toggle('visiblity')
    ul.classList.toggle('visiblity')
    navbar.classList.toggle('h-nav')
})