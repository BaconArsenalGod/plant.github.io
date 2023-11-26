window.addEventListener('scroll', function() {
    var page1Height = document.getElementById('page1').offsetHeight;
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;

    if (scrollPosition > page1Height - windowHeight) {
        document.getElementById('page2').style.display = 'block';
    }
});
