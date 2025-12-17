// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbar = document.querySelector('.navbar');
    
    if (navbarToggle && navbar) {
        navbarToggle.addEventListener('click', function() {
            const isOpen = navbar.classList.contains('mobile-open');
            
            if (isOpen) {
                navbar.classList.remove('mobile-open');
                navbarToggle.setAttribute('aria-expanded', 'false');
            } else {
                navbar.classList.add('mobile-open');
                navbarToggle.setAttribute('aria-expanded', 'true');
            }
        });
        
        // Close mobile menu when clicking on a link
        const menuLinks = navbar.querySelectorAll('.navbar-menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbar.classList.remove('mobile-open');
                navbarToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navbar.contains(event.target);
            const isToggleButton = navbarToggle.contains(event.target);
            
            if (!isClickInsideNav && !isToggleButton && navbar.classList.contains('mobile-open')) {
                navbar.classList.remove('mobile-open');
                navbarToggle.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close mobile menu on window resize if it becomes desktop view
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768 && navbar.classList.contains('mobile-open')) {
                navbar.classList.remove('mobile-open');
                navbarToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
});

