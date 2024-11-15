let currentSlides = [0, 0, 0];
const slideTexts = ["Foco cercano", "Foco medio", "Foco lejano"];

function changeSlide(direction, carouselNumber) {
    const carouselId = `carousel${carouselNumber}`;
    const slides = document.getElementById(carouselId);
    const totalSlides = slides.children.length;
    const textElement = document.getElementById(`carousel-text${carouselNumber}`);

    // Cambiar el slide para el carrusel correspondiente
    currentSlides[carouselNumber - 1] += direction;

    if (currentSlides[carouselNumber - 1] >= totalSlides) currentSlides[carouselNumber - 1] = 0;
    if (currentSlides[carouselNumber - 1] < 0) currentSlides[carouselNumber - 1] = totalSlides - 1;

    // Cambiar la imagen
    slides.style.transform = `translateX(-${currentSlides[carouselNumber - 1] * 100}%)`;

    // Cambiar el texto
    textElement.textContent = slideTexts[currentSlides[carouselNumber - 1]];
}
