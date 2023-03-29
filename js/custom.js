$(document).ready(function () {
	$('#carousel1').owlCarousel({
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			479: {
				items: 1
			},
			768: {
				items: 1
			},
			979: {
				items: 1
			},
			1199: {
				items: 1
			}
		},
		nav: true,
		dots: false,
		navText: [],
		refresh: false,
		autoplay: false
	})

	$('#carousel2').owlCarousel({
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			479: {
				items: 1
			},
			768: {
				items: 1
			},
			979: {
				items: 1
			},
			1199: {
				items: 1
			}
		},
		nav: true,
		dots: false,
		navText: [],
		refresh: false,
		autoplay: false
	})
});


const elements = document.querySelectorAll(".animate__animated");

const inView = (el) => {
	const rect = el.getBoundingClientRect();
	return (
		(rect.top <= 0 && rect.bottom >= 0) ||
		(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
		(rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
	);
};

// Debounce function to delay the execution of the handleScroll function
const throttle = (callback, delay) => {
	let lastCallTime = 0;

	return (...args) => {
		const now = new Date().getTime();
		if (now - lastCallTime >= delay) {
			lastCallTime = now;
			callback(...args);
		}
	};
};

const animateElements = () => {
	elements.forEach((el) => {
		if (inView(el)) {
			var animationClass = el.dataset.animation;
			el.classList.add("animate__animated", animationClass, "animate__fadeInOpacity");
		}
	});
};

window.addEventListener("scroll", throttle(() => {
	animateElements();
}, 200));

