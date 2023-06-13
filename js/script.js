var navigation = document.getElementById('navigation');
var moonText = document.getElementById('moon_text');
var moonSideText = document.getElementById('moon_side_text');
var moonSideTextLi1 = document.getElementById('dm');
var moonSideTextLi2 = document.getElementById('dst');
var moonSideTextLi3 = document.getElementById('rot');
var deepSpaceText = document.getElementById('deep_space_text');
var deepSpaceNebula1 = document.getElementById('nebula1');
var deepSpaceNebula2 = document.getElementById('nebula2');
var deepSpaceNebula3 = document.getElementById('nebula3');
var deepSpaceNebula4 = document.getElementById('nebula4');
var deepSpaceNebula5 = document.getElementById('nebula5');

window.addEventListener('scroll', function() {
	if (window.pageYOffset === 0) {
		navigation.classList.remove('hide');
	} else {
		navigation.classList.add('hide');
	}
});

window.addEventListener('scroll', function() {
	if (isInViewport(moonText, 1.5)) {
		moonText.classList.add('fade-in');
	}
	if (isInViewport(moonSideText, 1.5)) {
		moonSideText.classList.add('fade-in-side');
	}
	if (isInViewport(moonSideText, 1.5)) {
		moonSideTextLi1.classList.add('fade-in-side');
	}
	if (isInViewport(moonSideText, 1.8)) {
		moonSideTextLi2.classList.add('fade-in-side');
	}
	if (isInViewport(moonSideText, 2)) {
		moonSideTextLi3.classList.add('fade-in-side');
	}
	if (isInViewport(deepSpaceText, 4.5)) {
		deepSpaceText.classList.add('fade-in');
	}
	if (isInViewport(deepSpaceNebula1, 3.5)) {
		deepSpaceNebula1.classList.add('fade-in-side');
	}
	if (isInViewport(deepSpaceNebula2, 3.5)) {
		deepSpaceNebula2.classList.add('fade-in-side');
	}
	if (isInViewport(deepSpaceNebula3, 3.5)) {
		deepSpaceNebula3.classList.add('fade-in-side');
	}
	if (isInViewport(deepSpaceNebula4, 3.5)) {
		deepSpaceNebula4.classList.add('fade-in-side');
	}
	if (isInViewport(deepSpaceNebula5, 3.5)) {
		deepSpaceNebula5.classList.add('fade-in-side');
	}
});

function isInViewport(element, threshold) {
	var rect = element.getBoundingClientRect();
	var windowHeight = window.innerHeight || document.documentElement.clientHeight;
	var elementHeight = rect.height;
	var thresholdValue = threshold || 0;

	var topOffset = rect.top + (elementHeight * thresholdValue);
	var bottomOffset = rect.top + elementHeight;

	return topOffset < windowHeight && bottomOffset > 0;
}

document.querySelector('.page-up').addEventListener('click', function() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});
