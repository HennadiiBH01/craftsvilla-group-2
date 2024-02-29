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

// Switch Reviews
const reviewTitle = document.getElementById('review-title')
const reviewText = document.getElementById('review-text')
const reviewAuthor = document.getElementById('review-author')

const reviews = [{
	title: "Perfect kids' party",
	text: `"Craftsvilla's painting party was a hit for my kid's birthday! Engaged kids, friendly staff, clean space. Will definitely recommend!"`,
	author: "- David (with young children)"
}, {
	title: "Fun with friends",
	text: `"Mosaic workshop with friends at Craftsvilla was amazing! Great instructor, quality kits, and tons of fun. Highly recommend!"`,
	author: "- Sarah (group outing)"
}, {
	title: "Creative team bonding",
	text: `"Our corporate team loved the watercolor workshop at Craftsvilla! Learned new skills, laughed together, and created beautiful art."`,
	author: "- Maria (corporate team)"
},]


let currentIndex = 0;
const fadeOutDuration = 500; // Duration of the fade-out animation in milliseconds
const fadeInDuration = 500; // Duration of the fade-in animation in milliseconds
const stayAtFullOpacityDuration = 2000; // Duration to stay at 100% opacity before transitioning to the next review in milliseconds
const reviewChangeInterval = fadeOutDuration + fadeInDuration + stayAtFullOpacityDuration;

function updateReview() {
	const currentReview = reviews[currentIndex];

	// Update text content
	reviewTitle.textContent = currentReview.title;
	reviewText.textContent = currentReview.text;
	reviewAuthor.textContent = currentReview.author;

	// Fade out
	setTimeout(() => {
		reviewTitle.style.transition = `opacity ${fadeOutDuration}ms ease-out`;
		reviewText.style.transition = `opacity ${fadeOutDuration}ms ease-out`;
		reviewAuthor.style.transition = `opacity ${fadeOutDuration}ms ease-out`;

		reviewTitle.style.opacity = 0;
		reviewText.style.opacity = 0;
		reviewAuthor.style.opacity = 0;
	}, 0);

	// Change review while it's at 0 opacity
	setTimeout(() => {
		currentIndex = (currentIndex + 1) % reviews.length;

		// Update text content
		reviewTitle.textContent = reviews[currentIndex].title;
		reviewText.textContent = reviews[currentIndex].text;
		reviewAuthor.textContent = reviews[currentIndex].author;

		// Fade in
		setTimeout(() => {
			reviewTitle.style.transition = `opacity ${fadeInDuration}ms ease-in`;
			reviewText.style.transition = `opacity ${fadeInDuration}ms ease-in`;
			reviewAuthor.style.transition = `opacity ${fadeInDuration}ms ease-in`;

			reviewTitle.style.opacity = 1;
			reviewText.style.opacity = 1;
			reviewAuthor.style.opacity = 1;
		}, 0);
	}, fadeOutDuration);

	// Repeat the cycle after a duration
	setTimeout(updateReview, reviewChangeInterval);
}

// Initial update
updateReview();