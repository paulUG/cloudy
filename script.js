// Toggle between Sign Up and Login forms
document.getElementById('login-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('signup-form').classList.add('d-none');
    document.getElementById('login-form').classList.remove('d-none');
  });
  
  document.getElementById('signup-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('login-form').classList.add('d-none');
    document.getElementById('signup-form').classList.remove('d-none');
  });
  document.getElementById('login-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('signup-form').classList.add('d-none');
    document.getElementById('login-form').classList.remove('d-none');
  });
  
  document.getElementById('signup-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('login-form').classList.add('d-none');
    document.getElementById('signup-form').classList.remove('d-none');
  });
  function collapseNavbar() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show'); // Collapse the navbar
      const navbarToggler = document.querySelector('.navbar-toggler');
      navbarToggler.click(); // Simulate a click on the toggle button to close the menu
    }
  }
  // Collapse navbar on scroll
  window.addEventListener('scroll', () => {
    collapseNavbar();
  });
  // Collapse navbar when a menu option is clicked
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      collapseNavbar();
    });
  });