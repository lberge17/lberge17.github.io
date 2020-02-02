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

function submitForm () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzbYREl-WGXzLk0Uso8fSe1n3iTQZTWC2qG-h53c1G__RYvKaQ/exec';
    const form = document.getElementById('popupForm');

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => console.log('Success!', response))
          .catch(error => console.error('Error!', error.message))
    })
}