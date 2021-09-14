const html = document.querySelector("html");
const button = document.querySelector('[data-night-mode]')
const i = document.querySelector('i');

button.addEventListener('click', ()=>{
    html.classList.toggle('night-mode');
    i.classList.toggle('gg-sun')
})