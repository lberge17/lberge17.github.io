document.addEventListener("DOMContentLoaded", () => {
    addScroll();
    listenContact();
    submitForm();
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

    contactBtn.addEventListener('click', () => {
        openPopup();
    })

    const closeBtn = document.getElementById('close-popup');
    closeBtn.addEventListener('click', () => {
        closePopup();
    })
}

function closePopup() {
    const popupContainer = document.getElementById('popupContainer');
    popupContainer.classList.add('hidden');
}

function openPopup() {
    const popupContainer = document.getElementById('popupContainer');
    popupContainer.classList.remove('hidden');
}

function submitForm () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzbYREl-WGXzLk0Uso8fSe1n3iTQZTWC2qG-h53c1G__RYvKaQ/exec';
    const form = document.getElementById('popupForm');

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
              console.log('Success!', response);
              closePopup();
              alert("I will get back to you soon. - Laura Berge");
          })
          .catch(error => {
              console.error('Error!', error.message);
              alert("Message failed to send. Please try again later or send me an email directly.")
          })
    })
}