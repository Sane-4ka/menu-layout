const list = document.querySelectorAll('.list');
const indicator = document.querySelector('.indicator');

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
    move(this);
}


list.forEach((item) => {
    item.addEventListener('click', activeLink);
});

function move(e) {
    for (let i = 0; i < 5; i++) {
        if (e == list[i])  {
            indicator.style.cssText = `transform: translateX(${70 * i}px);`;
        }
    }
}
