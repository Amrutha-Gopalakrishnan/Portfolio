const menu=document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menu.onclick = () => {
    navLinks.classList.toggle('active');
}