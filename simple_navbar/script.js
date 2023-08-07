let hamburger = document.getElementById('menu');
let nav = document.getElementById('nav');
let list = document.getElementById('menu-items');
hamburger.addEventListener('click', () => {
	nav.classList.toggle('navbarClicked');
	nav.style.transition = '1s';
	list.classList.toggle('expanded');

})