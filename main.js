const toggleBtn = document.querySelector('.burger_button')
const menu = document.querySelector('nav_menu');
const icons = document.querySelector('nav_right');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})