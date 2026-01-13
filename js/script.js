document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Toggle (Mobile)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }

    // 2. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu on click
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // 3. Scroll Reveal Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section, .card, .about-img, .about-content').forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    // 4. Parallax Effect for Page Headers (Desktop Only)
    const pageHeaderBg = document.querySelector('.page-header-bg');
    if (pageHeaderBg && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            let offset = window.scrollY;
            pageHeaderBg.style.transform = `translateY(${offset * 0.5}px)`;
        });
    }


});
