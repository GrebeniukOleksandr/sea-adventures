let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.header__menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})