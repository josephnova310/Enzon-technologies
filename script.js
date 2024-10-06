// Toggle Dark Mode
const toggleButton = document.querySelector('.toggle-dark-mode');

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

window.onscroll = function() {stickyNavbar()};

// Sticky Navbar
function stickyNavbar() {
    const navbar = document.querySelector(".navbar");
    if (window.pageYOffset > 0) {
        navbar.classList.add("navbar-sticky");
    } else {
        navbar.classList.remove("navbar-sticky");
    }
}
