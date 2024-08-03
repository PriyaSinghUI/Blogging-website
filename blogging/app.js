const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("header", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".hero", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5");

// Navbar functionality
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Scroll animations
const scrollAnimation = (elements, animationClass) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
            } else {
                entry.target.classList.remove(animationClass);
            }
        });
    });

    elements.forEach((el) => observer.observe(el));
}

// Member cards animation
const memberCards = document.querySelectorAll('.member-card');
scrollAnimation(memberCards, 'animate-member');

// Album cards animation
const albumCards = document.querySelectorAll('.album-card');
scrollAnimation(albumCards, 'animate-album');

// News cards animation
// News cards animation
const newsCards = document.querySelectorAll('.news-card');
scrollAnimation(newsCards, 'animate-news');

// Gallery images animation
const galleryImages = document.querySelectorAll('.gallery-grid img');
scrollAnimation(galleryImages, 'animate-gallery');


// Tour cards animation
const tourCards = document.querySelectorAll('.tour-card');
scrollAnimation(tourCards, 'animate-tour');

// Merchandise cards animation
const merchCards = document.querySelectorAll('.merch-card');
scrollAnimation(merchCards, 'animate-merch');

// Fan art images animation
const fanArtImages = document.querySelectorAll('.fanart-grid img');
scrollAnimation(fanArtImages, 'animate-fanart');

// Video cards animation
const videoCards = document.querySelectorAll('.video-card');
scrollAnimation(videoCards, 'animate-video');

// Achievement cards animation
const achievementCards = document.querySelectorAll('.achievement-card');
scrollAnimation(achievementCards, 'animate-achievement');



// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    let scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
});



