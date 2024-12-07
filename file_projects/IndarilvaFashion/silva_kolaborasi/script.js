let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle menu icon and navbar for mobile view
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Handle active navigation link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    // Remove menu icon and navbar when scrolling (mobile view)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
    // Update active navigation link based on scroll position
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};