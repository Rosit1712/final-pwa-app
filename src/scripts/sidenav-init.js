const makeSideNav = () => {
  const nav = document.getElementById('nav-mobile');
  const sidenav = document.getElementById('sidenav');
  nav.addEventListener('click', (event) => {
    if (sidenav.style.display === 'none' || sidenav.style.display === '') {
      sidenav.style.display = 'block';
    } else {
      sidenav.style.display = 'none';
    }
    event.stopPropagation();
  });
  document.addEventListener('click', (event) => {
    sidenav.style.display = 'none';
    event.stopPropagation();
  });
};

export default makeSideNav;
