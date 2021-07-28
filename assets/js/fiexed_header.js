const welcomeSection = document.querySelector('.welcome_section');
const fixedHeader = document.getElementById('fixed_header');

const intersectionOptions = {
    threshold: 0,
}

const intersectionCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fixedHeader.classList.remove('visible');
        } else {
            fixedHeader.classList.add('visible');
        }
    })
}

const observer = new IntersectionObserver(intersectionCallback, intersectionOptions);
observer.observe(welcomeSection);