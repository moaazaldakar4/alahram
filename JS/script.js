document.addEventListener('DOMContentLoaded', function () {
    // Handle navbar link hover effects
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            navLinks.forEach(l => l.classList.remove('active')); // Remove active class from all links
            this.classList.add('active'); // Add active class to the hovered link
        });
    });

    // Initialize ScrollReveal
    const sr = ScrollReveal({
        reset: false, // Set to true if you want the element to reappear on scroll back up
        distance: '10px', // Distance the element travels during the reveal
        duration: 1500, // Duration of the animation in milliseconds
        delay: 0, // Delay before the animation starts
        easing: 'ease', // Easing function for the animation
        opacity: 1, // Initial opacity of the element (for fade-in effect)
    });
    

    sr.reveal('.header-image', { origin: 'top' });
    sr.reveal('.nav-link , .services-box ,.item-list li ', { origin: 'bottom' });
    sr.reveal('.home-image ,.about-content p ', { origin: 'left' });
    sr.reveal('.heading, .home-content ,.big-title ', { origin: 'right' });

    // Initialize Typed.js
    const typed = new Typed('.multi-text', {
        strings: [
            'إدارة الدكتورة / رشا عمارة',
            'نشكراً لزيارة موقعنا الألكتروني ونرحب بكم ترحيباً ممزوجاً بالود و الإخوة',
            'تحاليل طبية و خدمات راقية بأسعار مناسبة'
        ],
        typeSpeed:90,
        backSpeed: 10,
        backDelay: 5000,
        loop: true,
    });

    // Handle navbar toggler
    const toggler = document.querySelector('.navbar-toggler');
    const collapse = document.querySelector('.collapse');

    toggler.addEventListener('click', function () {
        if (collapse.classList.contains('show')) {
            toggler.classList.remove('collapsed');
        } else {
            toggler.classList.add('collapsed');
        }
    });
});


const typed = new Typed('.autotype', {
    strings: ['تمنياتنا لكم بالشفاء العاجل','تمنياتنا لكم بالشفاء العاجل'],
    typeSpeed:90,
    backSpeed: 10,
    backDelay: 5000,
    loop: false,
});
document.addEventListener('DOMContentLoaded', () => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.contact-form-section', {
        origin: 'left',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        opacity: 0,
        scale: 1.05,
        reset: true
    });

    ScrollReveal().reveal('.contact-info-section', {
        origin: 'right',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        opacity: 0,
        scale: 1.05,
        reset: true
    });

    // Form submission handler
    document.getElementById('contactForm').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Message sent! We will get back to you soon.');
        event.target.reset(); // Clear the form
    });
});
        





