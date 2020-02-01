document.addEventListener("DOMContentLoaded", () => {
    addScroll();
})

function addScroll () {
    const projectsBtn = document.querySelector('.project-btn');
    const projects = document.querySelector('.projects');
    projectsBtn.addEventListener('click', () => {
        window.scrollTo({ top: projects.offsetTop, behavior: 'smooth' });
    })
}