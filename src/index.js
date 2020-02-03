document.addEventListener("DOMContentLoaded", () => {
    addProjectsScroll();
    listenContact();
    submitForm();
    alignSlides();
    addCarouselBtns();
})

function addProjectsScroll () {
    const projectsBtn = document.querySelector('.project-btn');
    const projects = document.querySelector('.projects');
    projectsBtn.addEventListener('click', () => {
        window.scrollTo({ top: projects.offsetTop, behavior: 'smooth' });
    })

    listenNextProject();
}

function listenNextProject () {
    const nextBtns = document.querySelectorAll('.next-project');
    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const scrollTop = btn.offsetParent.nextElementSibling.offsetTop;
            window.scrollTo({ top: scrollTop, behavior: 'smooth' });
        })
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

function alignSlides() {
    const tracks = document.querySelectorAll('.track');
    tracks.forEach(track => {
        const slides = Array.from(track.children);
        const slideWidth = slides[0].getBoundingClientRect().width;

        slides.forEach((slide, index) => {
            slide.style.left = (slideWidth * index).toString() + 'px';
        });
    });
}

function addCarouselBtns() {
    const carBtns = document.querySelectorAll('.carousel-btn');

    carBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            moveCarousel(btn.id);
        })
    })
}

function moveCarousel(btnId) {
    const trackId = btnId.split('-')[0] + '-track';
    const direction = btnId.split('-')[1];
    const track = document.getElementById(trackId);
    const slides = Array.from(track.children);
    const currentSlide = slides.find(slide => slide.classList.contains('current'));
    const prevSibling = currentSlide.previousElementSibling;
    const nextSibling = currentSlide.nextElementSibling;

    if (direction === 'left' && prevSibling) {
        moveTrack(track, currentSlide, prevSibling);
    } else if (direction === 'right' && nextSibling) {
        moveTrack(track, currentSlide, nextSibling);
    }
}

function moveTrack(track, current, next) {
    track.style.transform = 'translateX(-' + next.style.left + ')';
    current.classList.remove('current');
    next.classList.add('current');
}