const bars = document.querySelector('.bars');

const offScreenMenu = document.querySelector('.off-screen-menu');

bars.addEventListener('click', () => {
    offScreenMenu.classList.toggle('active');
})