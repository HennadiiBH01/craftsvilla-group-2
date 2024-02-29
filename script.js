let isMenuOpen = false;
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuCloseIcon = document.getElementById('menu-close-icon');
const mobileMenuOpenIcon = document.getElementById('menu-open-icon');

const toggleMenu = () => {
	isMenuOpen = !isMenuOpen

	isMenuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

	mobileMenuBtn.classList.toggle('menu-btn-open')
	mobileMenuBtn.classList.toggle('menu-btn-closed')
	mobileMenu.classList.toggle('visible')
	mobileMenu.classList.toggle('hidden')
	mobileMenuCloseIcon.classList.toggle('visible')
	mobileMenuCloseIcon.classList.toggle('hidden')
	mobileMenuOpenIcon.classList.toggle('visible')
	mobileMenuOpenIcon.classList.toggle('hidden')

	document.getElementsByClassName("header-mobile")[0].classList.toggle('bottom-0')
}

//
// Function to toggle active smile
function toggleActiveSmile(clickedElement) {
	// Get all smile images
	const smiles = document.getElementsByClassName('smile-img');

	// Loop through all smiles to deactivate them
	for (const smile of smiles) {
		smile.src = smile.dataset.inactive;
	}

	// Set the clicked smile as active
	clickedElement.src = clickedElement.dataset.active;
}

// Reviews
// let slideIndex = 0;
//
// function moveSlide(n) {
// 	const slides = document.getElementsByClassName("carousel-slide");
// 	slideIndex += n;
// 	if (slideIndex >= slides.length) {slideIndex = 0}
// 	if (slideIndex < 0) {slideIndex = slides.length - 1}
// 	for (let i = 0; i < slides.length; i++) {
// 		slides[i].style.display = "none";
// 	}
// 	slides[slideIndex].style.display = "flex"; // Adjust display to 'flex'
// }
//
// document.querySelector('.container-prev').addEventListener('click', function() {
// 	moveSlide(-1);
// });
//
// document.querySelector('.container-next').addEventListener('click', function() {
// 	moveSlide(1);
// });
//
// moveSlide(0); // Show first slide by default