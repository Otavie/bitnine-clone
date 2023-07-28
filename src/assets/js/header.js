window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const aboveHeader = document.querySelector('.above-header');
  const logoImg = document.querySelector('.logo-img');
  const scrollY = window.scrollY;

  if (scrollY > 1){
    header.classList.add('show')
    aboveHeader.classList.add('show')
  } else {
    header.classList.remove('show');
    aboveHeader.classList.remove('show');
  }
  
  if (scrollY > 240){
    logoImg.classList.add('reduce')
  } else {
    logoImg.classList.remove('reduce');
  }

})
