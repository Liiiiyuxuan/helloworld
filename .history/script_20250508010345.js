document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main .section');
    const navLinks = document.querySelectorAll('.navbar a');

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const link = document.querySelector(`.navbar a[href="#${id}"]`);
            if (entry.isIntersecting) {
            link.classList.add('active');
            } else {
            link.classList.remove('active');
            }
        });
    };

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
});
