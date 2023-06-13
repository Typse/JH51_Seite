var navigation = document.getElementById('navigation');
var moonText = document.getElementById('moon_text');
var moonTextPosition = moonText.getBoundingClientRect().top;
var screenPosition = window.innerHeight;


window.addEventListener('scroll', function()
{
	if (window.pageYOffset === 0) 
		{
			navigation.classList.remove('hide');
		}
	else 
		{
			navigation.classList.add('hide');
		}
});

window.addEventListener('scroll', function()
{
	if (moonTextPosition < screenPosition) 
	{
		moonText.classList.add('fade-in');
	}
});

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', function() {
    var moonText = document.getElementById('moon_text');

    if (isInViewport(moonText)) {
        moonText.classList.add('fade-in');
    }
});