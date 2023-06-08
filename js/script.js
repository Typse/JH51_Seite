window.addEventListener('scroll', function() {
    var nav = document.getElementById('navigation');
    if (window.pageYOffset === 0) {
        nav.classList.remove('hide');
    } else {
        nav.classList.add('hide');
    }
});