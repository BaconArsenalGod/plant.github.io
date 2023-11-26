const nav = document.querySelector('nav');
const secondPage = document.getElementById('second-page');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const secondPageHeight = secondPage.offsetHeight;

  if (scrollTop + window.innerHeight >= secondPageTop) {
    secondPage.classList.add('active');
    nav.classList.add('hidden');
  } else {
    secondPage.classList.remove('active');
    nav.classList.remove('hidden');
  }
});
