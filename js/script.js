const menu = document.querySelectorAll('.box__menu');

menu.forEach((box) => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');    
    });
});