document.addEventListener('DOMContentLoaded', () => {
  // Navbar Toggle for Mobile
  const navbarShowBtn = document.querySelector('.navbar-toggler');
  const navbarHideBtn = document.querySelector('.navbar-nav');
  const navbarBox = document.querySelector('.navbar-collapse');

  // Toggle navbar visibility on mobile
  navbarShowBtn.addEventListener('click', () => {
    navbarBox.classList.toggle('show');
  });

  
});
