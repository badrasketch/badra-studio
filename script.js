// Small helper script for Badra Studio website
// Collapse mobile navigation menu when a navigation link is clicked
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      // Uncheck the mobile menu toggle after clicking a link on small screens
      if (window.innerWidth <= 768 && menuToggle.checked) {
        menuToggle.checked = false;
      }
    });
  });
});