const navLinksEls = document.querySelectorAll('.menu a');
const sectionEls = document.querySelectorAll('.section');

let currentSection = 'home';

window.addEventListener('scroll', () =>
{
  sectionEls.forEach(sectionEl =>
  {
    if (window.scrollY >= (sectionEl.offsetTop - 300))
    {
      currentSection = sectionEl.id;
    }
  });

  navLinksEls.forEach(navLinkEl =>
  {
    if (navLinkEl.href.includes(currentSection))
    {
      document.querySelector('.active').classList.remove('active');
      navLinkEl.classList.add('active');
    }
  })
})