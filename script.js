// ================= SCROLL PROGRESS BAR =================

const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', () => {

    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + '%';
});


// ================= FADE-IN ON SCROLL =================

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {

    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.8s ease";

    observer.observe(section);
});


// ================= ACTIVE NAV HIGHLIGHT =================

const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(scrollY >= sectionTop - 120){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});