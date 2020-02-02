document.addEventListener("DOMContentLoaded", () => {
    addScroll();
    listenContact();
})

function addScroll () {
    const projectsBtn = document.querySelector('.project-btn');
    const projects = document.querySelector('.projects');
    projectsBtn.addEventListener('click', () => {
        window.scrollTo({ top: projects.offsetTop, behavior: 'smooth' });
    })
}

function listenContact() {
    const contactBtn = document.querySelector('.contact-btn');
    const popupContainer = document.getElementById('popupContainer');
    contactBtn.addEventListener('click', () => {
        popupContainer.classList.remove('hidden');
    })

    const closeBtn = document.getElementById('close-popup');
    closeBtn.addEventListener('click', () => {
        popupContainer.classList.add('hidden');
    })
}