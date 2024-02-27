let isMenuOpen = false;
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuCloseIcon = document.getElementById('menu-close-icon');
const mobileMenuOpenIcon = document.getElementById('menu-open-icon');

const toggleMenu = () => {
	isMenuOpen = !isMenuOpen

	mobileMenuBtn.classList.toggle('menu-btn-open')
	mobileMenuBtn.classList.toggle('menu-btn-closed')
	mobileMenu.classList.toggle('visible')
	mobileMenu.classList.toggle('hidden')
	mobileMenuCloseIcon.classList.toggle('visible')
	mobileMenuCloseIcon.classList.toggle('hidden')
	mobileMenuOpenIcon.classList.toggle('visible')
	mobileMenuOpenIcon.classList.toggle('hidden')
}

