// 1. Navbar Scroll Effect
// 1. Navbar Transformation
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Intersection Observer (Reveal on Scroll)
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Select elements to reveal
document.querySelectorAll('.skill-card, .project-card, .section-title').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
    
    // Add a simple class switch
    const animate = () => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
    };
    
    // Watch them
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => { if(e.isIntersecting) animate(); });
    });
    scrollObserver.observe(el);
});

const menu = document.getElementById("nav-menu");
const btn = document.getElementById("menu-icon");

btn.onclick = () => {
    menu.classList.toggle("active");
};

window.addEventListener('load',()=>{
    const myvideo = document.querySelector('front');
    myvideo.play().catch( error =>{
        console.log('video not loading properly')
    })
})