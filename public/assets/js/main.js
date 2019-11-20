


const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('nav-active')
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .8
          } s`;
      }
    });
    burger.classList.toggle('toggle')
  });
}

const app = () => {
  navSlide();
  console.log("js is connetcted")
}
app();